const wholeSystemVideos = [
    {
        title: "Street Fighter Style Combat System",
        youtubeId: "5xWnSkNOg3o"
    },
    {
        title: "Katana Tool System",
        youtubeId: "AHouegeVPYA"
    }
];

const modelImages = [
    "Archway.png",
    "Axe.png",
    "Cid Sword.png",
    "Katana.png",
    "Mace.png",
    "Small Character Bundle.png"
];

const guiImages = [
    "Buttons.png",
    "HatsGuns.png",
    "LevelHealth.png",
    "PartyCreator.png"
];


const wholeSystemsButton =
    document.getElementById("wholeSystemsButton");

const modelsButton =
    document.getElementById("modelsButton");

const guiButton =
    document.getElementById("guiButton");

const heroImageSide =
    document.getElementById("heroImageSide");

const systemsPanel =
    document.getElementById("systemsPanel");

const modelsPanel =
    document.getElementById("modelsPanel");

const guiPanel =
    document.getElementById("guiPanel");

const videoGrid =
    document.getElementById("videoGrid");

const modelsGrid =
    document.getElementById("modelsGrid");

const guiGrid =
    document.getElementById("guiGrid");

const closeButtons =
    document.querySelectorAll("[data-close-panel]");

const imageLightbox =
    document.getElementById("imageLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");

const contactButton =
    document.getElementById("contactButton");

const contactModal =
    document.getElementById("contactModal");

const contactClose =
    document.getElementById("contactClose");

const discordButton =
    document.getElementById("discordButton");

const discordHandle =
    document.getElementById("discordHandle");


function readableName(filename) {
    return filename
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ");
}


function buildVideos() {
    videoGrid.innerHTML = "";

    wholeSystemVideos.forEach(
        (videoData, index) => {

            const card =
                document.createElement("article");

            card.className =
                "video-card";

            card.style.animationDelay =
                `${index * 0.07}s`;

            const wrapper =
                document.createElement("div");

            wrapper.className =
                "video-wrapper";

            const iframe =
                document.createElement("iframe");

            iframe.src =
                `https://www.youtube.com/embed/${videoData.youtubeId}`;

            iframe.title =
                videoData.title;

            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

            iframe.allowFullscreen = true;

            iframe.loading = "lazy";

            const info =
                document.createElement("div");

            info.className =
                "video-info";

            const name =
                document.createElement("div");

            name.className =
                "video-name";

            name.textContent =
                videoData.title;

            wrapper.appendChild(iframe);

            info.appendChild(name);

            card.appendChild(wrapper);
            card.appendChild(info);

            videoGrid.appendChild(card);
        }
    );

    const empty =
        document.createElement("div");

    empty.className =
        "empty-message video-empty-message";

    empty.innerHTML = `
        <div class="empty-symbol">
            💩
        </div>

        <h3>
            Nothing else here.
        </h3>

        <p>
            I'll add more!
        </p>
    `;

    videoGrid.appendChild(empty);
}


function buildImageGrid(
    images,
    grid,
    folder
) {
    grid.innerHTML = "";

    images.forEach(
        (filename, index) => {

            const card =
                document.createElement("div");

            card.className =
                "image-card";

            card.style.animationDelay =
                `${index * 0.055}s`;

            const image =
                document.createElement("img");

            image.src =
                encodeURI(
                    `${folder}/${filename}`
                );

            image.alt =
                readableName(filename);

            image.loading =
                "lazy";

            card.addEventListener(
                "click",
                () => {

                    openLightbox(
                        image.src,
                        image.alt
                    );

                }
            );

            card.appendChild(image);

            grid.appendChild(card);
        }
    );
}


function openPanel(panel) {
    systemsPanel.classList.remove(
        "open"
    );

    modelsPanel.classList.remove(
        "open"
    );

    guiPanel.classList.remove(
        "open"
    );

    heroImageSide.classList.add(
        "hidden"
    );

    setTimeout(
        () => {

            panel.classList.add(
                "open"
            );

        },
        120
    );
}


function closePanels() {
    systemsPanel.classList.remove(
        "open"
    );

    modelsPanel.classList.remove(
        "open"
    );

    guiPanel.classList.remove(
        "open"
    );

    setTimeout(
        () => {

            heroImageSide.classList.remove(
                "hidden"
            );

        },
        160
    );
}


function openLightbox(src, alt) {
    lightboxImage.src = src;

    lightboxImage.alt = alt;

    imageLightbox.classList.add(
        "open"
    );
}


function closeLightbox() {
    imageLightbox.classList.remove(
        "open"
    );

    setTimeout(
        () => {

            lightboxImage.src = "";

        },
        300
    );
}


function openContact() {
    contactModal.classList.add(
        "open"
    );
}


function closeContact() {
    contactModal.classList.remove(
        "open"
    );
}


wholeSystemsButton.addEventListener(
    "click",
    () => {

        openPanel(
            systemsPanel
        );

    }
);


modelsButton.addEventListener(
    "click",
    () => {

        openPanel(
            modelsPanel
        );

    }
);


guiButton.addEventListener(
    "click",
    () => {

        openPanel(
            guiPanel
        );

    }
);


closeButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            closePanels
        );

    }
);


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


imageLightbox.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            imageLightbox
        ) {

            closeLightbox();

        }

    }
);


contactButton.addEventListener(
    "click",
    openContact
);


contactClose.addEventListener(
    "click",
    closeContact
);


contactModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            contactModal
        ) {

            closeContact();

        }

    }
);


discordButton.addEventListener(
    "click",
    async () => {

        try {

            await navigator.clipboard.writeText(
                "dipps_alt"
            );

            discordHandle.textContent =
                "Copied!";

            setTimeout(
                () => {

                    discordHandle.textContent =
                        "dipps_alt";

                },
                1500
            );

        } catch {

            discordHandle.textContent =
                "dipps_alt";

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }

        if (
            imageLightbox.classList.contains(
                "open"
            )
        ) {

            closeLightbox();

        }

        if (
            contactModal.classList.contains(
                "open"
            )
        ) {

            closeContact();

        }

    }
);


buildVideos();

buildImageGrid(
    modelImages,
    modelsGrid,
    "images/models"
);

buildImageGrid(
    guiImages,
    guiGrid,
    "images/GUI"
);