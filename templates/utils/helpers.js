function createTitleCardTemplate(titleInfo) {
  let template = `
    <div class="title-card">
  `;

  if (titleInfo.reportName) {
    template += createReportTitle(titleInfo.reportName);
  }
  if (titleInfo.accountName && titleInfo.accountId) {
    template += createAccountLine(titleInfo.accountName, titleInfo.accountId);
  }
  if (titleInfo.userName) {
    template += createUserLine(titleInfo.userName);
  }
  if (titleInfo.createTimestamp && titleInfo.userTimeZone) {
    template += createCreateTimestamp(
      titleInfo.createTimestamp,
      titleInfo.userTimeZone
    );
  }
  if (titleInfo.reportStartTimestamp && titleInfo.reportEndTimestamp) {
    template += createTimeRange(
      titleInfo.reportStartTimestamp,
      titleInfo.reportEndTimestamp
    );
  }

  template += `
      </div>
    `;

  return template;
}

function createReportTitle(reportName) {
  return `<h1 class="title-card__title">${reportName}</h1>`;
}

function createAccountLine(accountName, accountId) {
  return `<div class="title-card__item">
      <span class="title-card__label">Account:</span>
      <div class="title-card__text">${accountName} (${accountId})</div>
      </div>`;
}

function createUserLine(userName) {
  return `<div class="title-card__item">
    <span class="title-card__label">User:</span>
    <div class="title-card__text">${userName}</div>
    </div>`;
}

function createCreateTimestamp(createTimestamp, userTimeZone) {
  return `<div class="title-card__item">
    <span class="title-card__label">Created:</span>
    <div class="title-card__text">${createTimestamp} (${userTimeZone})</div>
    </div>`;
}

function createTimeRange(startTimestamp, endTimestamp) {
  return `<div class="title-card__item">
    <span class="title-card__label">Time Range:</span>
    <div class="title-card__text">${startTimestamp} ~ ${endTimestamp}</div>
    </div>`;
}

function generateElementForChartsGrid(htmlElement){
    const element = document.createElement('div');
    const chartsGrid = htmlElement.querySelector('.charts-grid');
    element.classList.add('chart');
    chartsGrid?.append(element);

        return element;
    };

    // function createGraphTemplate(){
    //     const article = document.createElement('article');
    //     const div = document.createElement('div');
    //     div.setAttribute('class', 'charts-grid');
    //     article.appendChild(div);
    //     return article
    // }