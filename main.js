function loadFile(id, file) {

    fetch(file)
        .then(res => res.text())
        .then(data => {

            document.getElementById(id).innerHTML = data

            // header load হলে menu script run
            if (id === "header") {
                initMenu()
            }

        })

}

loadFile("header", "header.html")
loadFile("footer", "footer.html")

function initMenu() {

    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');
    const openMenu = document.getElementById('open-menu');

    if (menu && closeMenu && openMenu) {

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('max-md:w-full')
            menu.classList.add('max-md:w-0')
        })

        openMenu.addEventListener('click', () => {
            menu.classList.remove('max-md:w-0')
            menu.classList.add('max-md:w-full')
        })

    }

}



//FaQ Section code
    const faqs = [
        {
            question: "How to use this component?",
            answer: "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
        },
        {
            question: "Are there any other components available?",
            answer: "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
        },
        {
            question: "Are components responsive?",
            answer: "Yes, all components are responsive and can be used on different screen sizes.",
        },
        {
            question: "Can I customize the components?",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
    ];

    const container = document.getElementById("faqContainer");

    faqs.forEach((faq, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "border-b border-slate-200 py-4 cursor-pointer";

        const header = document.createElement("div");
        header.className = "flex items-center justify-between";
        header.innerHTML = `
            <h3 class="text-base font-medium">${faq.question}</h3>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transition-all duration-500 ease-in-out icon">
                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        const answer = document.createElement("p");
        answer.className = "text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md opacity-0 max-h-0 -translate-y-2 pt-0 answer";
        answer.textContent = faq.answer;

        wrapper.appendChild(header);
        wrapper.appendChild(answer);
        container.appendChild(wrapper);

        header.addEventListener("click", () => {
            const allAnswers = document.querySelectorAll(".answer");
            const allIcons = document.querySelectorAll(".icon");

            allAnswers.forEach((el, i) => {
                if (i === index) {
                    const isOpen = el.classList.contains("opacity-100");
                    el.classList.toggle("opacity-100", !isOpen);
                    el.classList.toggle("max-h-[300px]", !isOpen);
                    el.classList.toggle("translate-y-0", !isOpen);
                    el.classList.toggle("pt-4", !isOpen);
                    el.classList.toggle("opacity-0", isOpen);
                    el.classList.toggle("max-h-0", isOpen);
                    el.classList.toggle("-translate-y-2", isOpen);

                    allIcons[i].classList.toggle("rotate-180", !isOpen);
                } else {
                    el.classList.remove("opacity-100", "max-h-[300px]", "translate-y-0", "pt-4");
                    el.classList.add("opacity-0", "max-h-0", "-translate-y-2");
                    allIcons[i].classList.remove("rotate-180");
                }
            });
        });
    });



// Price Section Code

    let isAnnual = true;

    const pricing = {
        basic: { monthly: 10, annual: 100 },
        pro: { monthly: 30, annual: 300 },
        enterprise: { monthly: 50, annual: 500 }
    };

    function togglePricing(annual) {
        isAnnual = annual;

        // Update prices
        document.getElementById('basicPrice').textContent = isAnnual ? pricing.basic.annual : pricing.basic.monthly;
        document.getElementById('proPrice').textContent = isAnnual ? pricing.pro.annual : pricing.pro.monthly;
        document.getElementById('enterprisePrice').textContent = isAnnual ? pricing.enterprise.annual : pricing.enterprise.monthly;

        // Update button styles
        const monthlyBtn = document.getElementById('monthlyBtn');
        const annuallyBtn = document.getElementById('annuallyBtn');

        if (isAnnual) {
            monthlyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition text-gray-600';
            annuallyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition bg-zinc-800 hover:bg-zinc-900 text-white';
        } else {
            monthlyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition bg-zinc-800 hover:bg-zinc-900 text-white';
            annuallyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition text-gray-600';
        }
    }



//Chaty Code


function toggleChat() {
  document.getElementById("chatBox").classList.toggle("hidden");
}

