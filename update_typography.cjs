const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.css')) {
            processFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    const blockRegex = /([^{]+)\{([^}]*)\}/g;
    
    content = content.replace(blockRegex, (match, selector, blockContent) => {
        let newBlock = blockContent;
        
        // Check if selector points to text/typography elements
        const isDesc = /sub|body|text|desc|para|content|row|link|nav|menu|item/i.test(selector) || /\b(p|a|span)\b/i.test(selector);
        const isHeading = /title|head|name|label/i.test(selector) || /\b(h3|h4|h5|h6)\b/i.test(selector);
        const isBigHeading = /h1|h2|heroHead|secHead|heroH1|secHeading|heroTitle|mainHead/i.test(selector) || /\b(h1|h2)\b/i.test(selector);
        
        if (isBigHeading) {
            return match; // skip huge headings
        }

        // Only replace if there is an existing font-size
        if (isHeading && !isBigHeading) {
            newBlock = newBlock.replace(/font-size:\s*[^;!]+(?:\s*;|\s+!important;)?/g, 'font-size: clamp(17px, 2vw, 20px);');
        } else if (isDesc) {
            newBlock = newBlock.replace(/font-size:\s*[^;!]+(?:\s*;|\s+!important;)?/g, 'font-size: clamp(15px, 1.5vw, 17px);');
        }

        if (newBlock !== blockContent) {
            return `${selector}{${newBlock}}`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated CSS: ${filePath}`);
    }
}

processDir(path.join(__dirname, 'components'));
processDir(path.join(__dirname, 'app'));

console.log('Typography update complete!');
