export function addJsAtLocation(fileName, location,loadType) {
    loadType = loadType || 'async';
    var head = document.head;
    var footer = document.body.getElementsByTagName('footer')[0];
    var link = document.createElement("script");
    link.type = "text/javascript";
    link.src = fileName;
    link[loadType] = loadType;
    if (location == 'footer') {
        footer.appendChild(link);
    } else {
        head.appendChild(link);
    }
}

export function addTaboolaLoader() {
    let isTaboolaLoaderLoaded = false;
    window._taboola = window._taboola || [];
    window._taboola.push({article: 'auto', tracking: 'utm_source=Taboola_Recirculation&utm_medium=RC&utm_campaign=FE'});
    window.addEventListener('scroll',function (event) {

        if(window.scrollY>80 && !isTaboolaLoaderLoaded) {
            isTaboolaLoaderLoaded = true;
            (function (e, f, u, i) {
                if (!document.getElementById(i)) {
                    e.async = 1;
                    e.src = u;
                    e.id = i;
                    f.parentNode.insertBefore(e, f);
                }
            })(document.createElement('script'), document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/indianexpress-financialexpress/loader.js', 'tb_loader_script');
        }
    })

    if (window.performance && typeof window.performance.mark == 'function') {
        window.performance.mark('tbl_ic');
    }
}

export function displayTaboola() {
    window._taboola = window._taboola || [];
    let taboolaDisplay = false;
    window.addEventListener('scroll',function () {
        if(window.scrollY>150 && !taboolaDisplay) {
            taboolaDisplay = true;
            window._taboola.push({
                mode: 'alternating-thumbnails-a',
                container: 'taboola-below-article',
                placement: 'below article',
                target_type: 'mix'
            });
            window._taboola = window._taboola || [];
            window._taboola.push({flush: true});
        }
    })

}

