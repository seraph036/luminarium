async function copyEmail() {
    try {
        // Write text to clipboard
        await navigator.clipboard.writeText("seraphim036@proton.me");
        
        // Optional: Provide feedback to user
        console.log("Email copied successfully!");
    } catch (err) {
        // Handle errors gracefully
        console.error("Failed to copy email:", err);
    }
}

// Add click handlers to copy buttons
var copyButtons = document.querySelectorAll(".copy");
for (const button of copyButtons) {
    button.onclick = copyEmail;
}