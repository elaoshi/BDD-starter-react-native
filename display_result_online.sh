# Author : Eric
# Descption: display result online
# Version : 1.0.2

# pip3 install git+https://github.com/typhoon-hil/allure-docx.git

# run report on server for online viewing
mkdir report_dir
./node_modules/.bin/allure generate -o report_dir
cd report_dir && python -m SimpleHTTPServer  9000

# or using allure to show result online directly
# ./node_modules/.bin/allure serve ./allure-results --port 9000





