"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir="${HOME}/Library/Application Support/Google/Chrome/" &

sleep 5

echo "node connection & puppeteer starting... "

node --inspect -r esm ./connectExisting.js

