FROM mcr.microsoft.com/playwright:latest
WORKDIR /tests
COPY . /tests
ENV SCREEN_WIDTH=1920 \
    SCREEN_HEIGHT=1080 \
    PLAYWRIGHT_BROWSERS_PATH=/usr/lib/playwright-browsers/
RUN npm install && npx playwright install
ENTRYPOINT [ "npm", "test" ]
CMD ["--headed=false"]
