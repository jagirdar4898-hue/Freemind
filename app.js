window.onload = function() {
    // 3000 milliseconds = 3 seconds
    setTimeout(function() {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');

        // Loader ko gayab karna
        loader.style.opacity = '0';
        
        // Thoda wait karke loader ko remove karna aur content dikhana
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block'; // Content show karna
            mainContent.classList.remove('hidden');
        }, 500); // 0.5 second fade out time

    }, 3000); // Yahan time change kar sakte ho (abhi 3 seconds hai)
};
