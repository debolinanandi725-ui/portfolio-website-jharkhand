// --- Train Search Page Logic ---

    // Station Search Elements
    const fromStationInput = document.getElementById('fromStationInput');
    const toStationInput = document.getElementById('toStationInput');
    const fromStationCode = document.getElementById('fromStationCode');
    const toStationCode = document.getElementById('toStationCode');
    const swapStationsBtn = document.getElementById('swapStationsBtn');
    const findTrainsBtn = document.getElementById('findTrainsBtn');

    // Direct Search Elements
    const directTrainSearchInput = document.getElementById('directTrainSearchInput');
    const searchIconButtons = document.querySelectorAll('.search-icon-button');

    // Clear Buttons
    const clearInputButtons = document.querySelectorAll('.clear-input, .clear-input-large');

    // Search History Elements
    const searchHistoryList = document.getElementById('searchHistoryList');

    // Mock station data
    const stationData = {
        "Seoraphuli Junction": "SHE",
        "Arambagh": "AMBG",
        "Tarakeswar": "TRKR",
        "Howrah": "HWH",
    };

    // --- Utility Functions ---

    const getStationCode = (stationName) => {
        const normalizedName = stationName.trim();
        for (const [name, code] of Object.entries(stationData)) {
            if (name.toLowerCase() === normalizedName.toLowerCase()) {
                return code;
            }
        }
        return '';
    };

    const updateStationCodes = () => {
        fromStationCode.textContent = getStationCode(fromStationInput.value) || '';
        toStationCode.textContent = getStationCode(toStationInput.value) || '';
    };
    
    // --- Search History Functions ---

    const getSearchHistory = () => {
        const history = localStorage.getItem('trainSearchHistory');
        return history ? JSON.parse(history) : [];
    };

    const saveSearchToHistory = (searchItem) => {
        const history = getSearchHistory();
        const exists = history.some(item => 
            item.from === searchItem.from && item.to === searchItem.to && item.trainNo === searchItem.trainNo
        );
        if (!exists) {
            history.unshift(searchItem);
            if (history.length > 5) {
                history.pop();
            }
            localStorage.setItem('trainSearchHistory', JSON.stringify(history));
        }
    };

    const renderSearchHistory = () => {
        const history = getSearchHistory();
        searchHistoryList.innerHTML = '';
        if (history.length === 0) {
            searchHistoryList.innerHTML = `<p style="color:#888; text-align:center;">No recent searches</p>`;
        } else {
            history.forEach(item => {
                const historyItem = document.createElement('div');
                historyItem.classList.add('history-item');
                let routeInfo = '';
                if (item.from && item.to) {
                    routeInfo = `${getStationCode(item.from) || ''} - ${getStationCode(item.to) || ''}`;
                } else if (item.trainNo) {
                    routeInfo = 'Direct Train Search';
                }

                historyItem.innerHTML = `
                    <span class="train-info">${item.trainNo || `${item.from} - ${item.to}`}</span>
                    <span class="route-info">${routeInfo}</span>
                    <i class="fas fa-chevron-right"></i>
                `;
                historyItem.addEventListener('click', () => {
                    if (item.from && item.to) {
                        fromStationInput.value = item.from;
                        toStationInput.value = item.to;
                        updateStationCodes();
                    } else if (item.trainNo) {
                        directTrainSearchInput.value = item.trainNo;
                    }
                    if (item.from && item.to) {
                        findTrainsBtn.click();
                    } else if (item.trainNo) {
                        document.querySelector('[data-search-type="train"]').click();
                    }
                });
                searchHistoryList.appendChild(historyItem);
            });
        }
    };

    // --- Event Listeners ---

    // Swap Stations Button
    swapStationsBtn.addEventListener('click', () => {
        const tempStation = fromStationInput.value;
        fromStationInput.value = toStationInput.value;
        toStationInput.value = tempStation;
        updateStationCodes();
    });

    // Clear Input Buttons
    clearInputButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.currentTarget.dataset.target;
            const targetInput = document.getElementById(targetId);
            if (targetInput) {
                targetInput.value = '';
                updateStationCodes();
            }
        });
    });

    // Update station codes on input change (for mock codes)
    fromStationInput.addEventListener('input', updateStationCodes);
    toStationInput.addEventListener('input', updateStationCodes);

    // Find Trains Button (From/To Stations)
    if (findTrainsBtn) {
        findTrainsBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const fromStation = fromStationInput.value.trim();
            const toStation = toStationInput.value.trim();
            
            if (fromStation && toStation) {
                saveSearchToHistory({ from: fromStation, to: toStation });
                window.location.href = `find.html?from=${encodeURIComponent(fromStation)}&to=${encodeURIComponent(toStation)}`;
            } else {
                alert('Please enter both departure and arrival stations.');
            }
        });
    }

    // Direct Search Button (Train)
    searchIconButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const searchType = event.currentTarget.dataset.searchType;
            let query = '';

            if (searchType === 'train') {
                query = directTrainSearchInput.value.trim();
                if (query) {
                    alert(`Searching for train: ${query}.`);
                    saveSearchToHistory({ trainNo: query });
                    renderSearchHistory();
                } else {
                    alert('Please enter a train name or number.');
                }
            }
        });
    });

    // Initial render of search history
    renderSearchHistory();
;