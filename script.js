//funkcja ukrywajacej/pokazujacej elementy na stronie
function reveal() {
    //lista wszystkich elementow z klasa reveal
    var reveals = document.querySelectorAll(".reveal");

    //for dla elementow
    for (var i = 0; i < reveals.length; i++) {

        //wysokosc okienka przegladarki
        var windowHeight = window.innerHeight;

        //koordynaty gornej krawedzi elementu
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            //jesli gorna krawedz elementa jest mniejsza od okienka przegladarki - wysokosci elementu to pokazujemy
            reveals[i].classList.add("active");
            reveals[i].classList.remove("disactivate");
        } 
        else if (elementTop == 0) {
            //jesli element jest na samej gorze to nic z nim nie robimy
            reveals[i].classList.remove("active");
            reveals[i].classList.remove("disactivate");
        }
        else {
            //jesli gorna krawedz elementa jest wieksza od okienka przegladarki - wysokosci elementu to chowamy
            reveals[i].classList.remove("active");
            reveals[i].classList.add("disactivate");
        }
    }
}

//dodanie na scrollu funkcji ukrywajacej/pokazujacej gatunki na stronie
$(window).on("scroll", reveal);

//funkcja zatrzymujaca audio
function stopAudio(e) {
    e.data.audio.pause()

    //usuwanie eventu na kliknieciu
    $(window).off("click", stopAudio)
}

function playAudio(path) {
    let audio = new Audio(path)
    audio.play()

    //odstep czasowy zeby audio moglo sie wlaczyc
    setTimeout(function() {
        //pokliknieciu audio sie zatrzymuje
        $(window).on("click", {audio: audio}, stopAudio)
    }, 5)
}

//funkcja wykonujaca sie jak sie wszystko zaladuje
$(document).ready(function() {

    //dodanie funkcji wywolujacej sie po kliknieciu na kazdy guzik "wiecej"
    $('.modalBtn').each(function () {
        $(this).click(function () {
            let htmlToAppend = ""

            //sprawdzanie ktory guzik byl klikniety po id
            switch ($(this).attr('id')) {
                case "rockModal":
                    htmlToAppend = `W rocku najważniejsze są <span class="underline" onclick="playAudio('./assets/rockguitar.wav')">gitary</span> i <span class="underline" onclick="playAudio('./assets/rockdrums.mp3')">perkusja</span>. Gitary często używają różnych efektów, takich jak przester albo echo.`
                    break
                case "popModal":
                    htmlToAppend = `Pop może wykorzystywać różne instrumenty i dźwięki, więc trudno określić jeden wyznaczający dźwięk. Pop często używa <span class="underline" onclick="playAudio('./assets/popProgression.mp3')">prostych akordów i progresji</span>.
                    `
                    break
                case "rapModal":
                    htmlToAppend = `Rap na przestrzeni lat bardzo się zmienił, <span class="underline" onclick="playAudio('./assets/hiphopoldschool.mp3')">począwszy od gangsterskich beatów z USA</span> aż do <span class="underline" onclick="playAudio('./assets/hiphoptrap.mp3')">trapu</span>. Powszechne stało się używanie również programu Autotune, który służy do przetworzenia głosu, tak aby był jak najbardziej w tonacji, dając mu specyficzny dźwięk.`
                    break
                case "phonkModal":
                    htmlToAppend = `Najbardziej rozpoznawalnymi samplami (czyli fragmentu wcześniej dokonanego nagrania muzycznego) to 
                        <span class="underline" onclick="playAudio('./assets/Cowbell808.mp3')">cowbell</span> i wokale rapowane wzięte z utworów podgatunku hip-hopowego 
                        <span class="underline" onclick="playAudio('./assets/MemphisRap.mp3')">"Memphis Rap".</span>`
                    break
                case "houseModal":
                    htmlToAppend = `House jest znany z <span class="underline" onclick="playAudio('./assets/housebeat.mp3')">perkusji</span> gdzie stopka (basowa część perkusji) uderza na każdą nutę jak i z <span class="underline" onclick="playAudio('./assets/housepiano.mp3')">skocznego pianina</span>.`
                    break
                case "jazzModal":
                    htmlToAppend = `Jazz jest najbardziej rozpoznawanalny dzięki użyciu atypowych akordów muzycznych zawierających więcej niż 3 nuty (podstawowe akordy składają się z 3 nut) i typowych dla tego gatunku progresji akordów (czyli sekwencji paru akordów, które zazwyczają tworzą całe utwory). Jazz jest rozpoznawalny także przez często używane w nim instrumenty, takie jak:
                        <ul>
                            <li class="underline" onclick="playAudio('./assets/JazzPiano.mp3')">Pianino</li>
                            <li class="underline" onclick="playAudio('./assets/Sax.wav')">Saksofon</li>
                            <li class="underline" onclick="playAudio('./assets/SnareBrush.wav')">"Pędzle" grane na werblach</li>
                        </ul>`
                    break
                case "rnbModal":
                    htmlToAppend = `R&B słynie z wolniejszego tempa, <span class="underline" onclick="playAudio('./assets/rnbbeat.mp3')">stonowanej perkusji</span> i <span class="underline" onclick="playAudio('./assets/rnbchords.mp3')">pełnych uczucia akordów.</span>`
                    break
                case "indieModal":
                    htmlToAppend = `Gatunek indie tak jak pop nie ma zdefiniowanego dźwięku, ale często wyróżnia się stonowanym brzmieniem.`
                    break
            }

            //czyszczenie i dodawanie tekstu do popupa
            $('#modal-text').empty()
            $('#modal-text').append(htmlToAppend)
        })
    })
})