document.addEventListener('DOMContentLoaded', function (event) {
    //create the modal
    //Add modal to the document
    const imageModal = document.createElement('div');
    imageModal.setAttribute('id', 'imageModal');
    const imageModalCloseButton = document.createElement('div');
    imageModalCloseButton.innerHTML = '&times;';
    imageModalCloseButton.setAttribute('id', 'modal-close');
    imageModal.appendChild(imageModalCloseButton);
    const imageModalImage = document.createElement('img');
    imageModalImage.setAttribute('id', 'modal-image');
    imageModal.appendChild(imageModalImage);
    const imageModalCaption = document.createElement('div');
    imageModalCaption.setAttribute('id', 'modal-caption');
    imageModal.appendChild(imageModalCaption);
    document.body.appendChild(imageModal);

    const contentImages = document.querySelectorAll('#main-content img');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    contentImages.forEach(function (img) {
        img.classList.add('imagePopout');
        img.onclick = function () {
            imageModal.style.display = "block";
            imageModalImage.src = img.src;
            if (img.alt) {
                imageModalCaption.innerHTML = img.alt;
            }
        }
    });

    imageModalCloseButton.onclick = function () {
        imageModal.style.display = "none";
    }

    setIframeVideo();
    setModifiedDate();
});

function setIframeVideo() {
    const contentIFrames = document.querySelectorAll('#main-content iframe');
    let mainContentWidth = getContentWidth(document.getElementById('main-content'));
    contentIFrames.forEach(function (frame) {
        if (frame.src.includes('youtube.com')) {
            frame.width = mainContentWidth + 'px';
            frame.height = mainContentWidth * 9 / 16 + 'px';
        }
    });
}

window.onresize = setIframeVideo;

function getContentWidth(element) {
    let styles = getComputedStyle(element)
    return element.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight)
}

function setModifiedDate() {
    if (document.getElementById('last-modified')) {
        let api_link = "https://api.github.com/repos/{{site.github.owner_name}}/{{site.github.repository_name}}/commits?path={{page.path}}";
        fetch(api_link)
            .then((response) => {
                console.log(response.json());
                return response.json();
            })
            .then((commits) => {
                console.log(JSON.stringify(commits[0]));
                let modified = commits[0]['commit']['committer']['date'].slice(0,10);
                if(modified != '{{ page.date | date: "%Y-%m-%d" }}') {
                    document.getElementById('last-modified').textContent = "Last Modified: " + modified;
                }
            });
    }
}