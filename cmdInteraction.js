document.querySelector('.user-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        // 处理用户输入的命令
        const command = this.innerText.trim();
        const cmdContent = document.querySelector('.cmd-content');

        if (command === 'help') {
            cmdContent.innerHTML += '\n> Supported commands:\n' +
                '> help: Display the list of supported commands.\n' +
                '> clear: Clear the command window.\n' +
                '> exit: Return to the main page.\n' +
                '> about: Show more information.';
        } else {
            console.log('User command:', command);
        }

        this.innerText = ''; // 清空用户输入
    }
});
