document.addEventListener('DOMContentLoaded', function () {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');

    scripts.forEach((script) => {
        try {
            const data = JSON.parse(script.textContent);

            // Convert date format
            function convertToISO(dateStr) {
                if (!dateStr) return "";
                const parsedDate = new Date(dateStr);
                return parsedDate.toISOString().split("T")[0];
            }

            if (data.startDate) data.startDate = convertToISO(data.startDate);
            if (data.endDate) data.endDate = convertToISO(data.endDate);

            script.textContent = JSON.stringify(data, null, 2);
        } catch (e) {
            // Some JSON-LD might not be event data, so don't break the script
            console.warn("Skipping JSON-LD block:", e);
        }
    });
});