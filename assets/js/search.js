function executeSearch(searchQuery) {
    fetch('/index.json')
        .then((response) => response.json())
        .then((searchData) => {
            const results = searchData.articles.filter(item => {
                const searchContent = item.title + item.content + item.summary;
                return searchContent.toLowerCase().includes(searchQuery.toLowerCase());
            });
            displayResults(results);
        });
}

function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p>没有找到相关结果</p>';
        return;
    }
    
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <h2><a href="${result.permalink}">${result.title}</a></h2>
            <p>${result.summary}</p>
        `;
        searchResults.appendChild(resultItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length > 1) {
                executeSearch(e.target.value);
            }
        });
    }
}); 