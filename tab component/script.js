
    const tabContainer = document.querySelector('.tab-container');

    const tabs = tabContainer.querySelectorAll('div');

    const contents = document.querySelectorAll('.tab-content > div');


    tabs.forEach((tab, idx) => {

        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('bg-amber-600', 'text-black'));

            contents.forEach(c => c.classList.add('hidden'))

            tab.classList.add('bg-amber-600', 'text-black');

            contents[idx].classList.remove('hidden');
        });
    });