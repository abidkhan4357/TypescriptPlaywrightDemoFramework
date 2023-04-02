FROM mcr.microsoft.com/playwright:latest
WORKDIR /tests
COPY . /tests
RUN npm ci && npx playwright install
ENTRYPOINT [ "npm", "test" ]