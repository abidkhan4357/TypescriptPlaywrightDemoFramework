FROM mcr.microsoft.com/playwright:v1.32.0-focal
WORKDIR /tests
COPY . /tests
RUN npm install && npx playwright install
CMD ["npx", "playwright", "test", "--reporter=list" ]