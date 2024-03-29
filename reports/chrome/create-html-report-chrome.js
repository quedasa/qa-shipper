/* eslint-disable linebreak-style */
const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports/chrome/',
  reportPath: 'reports/chrome/',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '68',
    },
    device: 'Docker Hub',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Project Red - AQA' },
      { label: 'Written by', value: 'Kabul Dasa' },
      { label: 'Repo', value: 'https://github.com/kabul-kargo' },
    ],
  },
});
