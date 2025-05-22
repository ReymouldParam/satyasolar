// Function to initialize character counter for textareas
function initCharacterCounter() {
    const textareas = document.querySelectorAll('textarea');
    const maxLength = 300; // Maximum character limit

    textareas.forEach(textarea => {
        // Create counter element
        const counterDiv = document.createElement('div');
        counterDiv.className = 'char-counter';
        counterDiv.style.fontSize = '12px';
        counterDiv.style.color = '#ffffff';
        counterDiv.style.marginTop = '5px';
        counterDiv.style.textAlign = 'right';
        counterDiv.textContent = `${maxLength} characters remaining`;
        
        // Insert counter after textarea
        textarea.parentNode.insertBefore(counterDiv, textarea.nextSibling);
        
        // Set maxlength attribute
        textarea.setAttribute('maxlength', maxLength);
        
        // Add input event listener
        textarea.addEventListener('input', function() {
            const remaining = maxLength - this.value.length;
            counterDiv.textContent = `${remaining} characters remaining`;
            
            // Change color when approaching limit
            if (remaining < 50) {
                counterDiv.style.color = '#ff6b6b';
            } else {
                counterDiv.style.color = '#666';
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCharacterCounter); 