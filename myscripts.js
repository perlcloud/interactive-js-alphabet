function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let effectCount = 1

function playEffect() {
    const effects = [
        "1.mp3",
        "2.mp3",
        "3.mp3",
        "4.mp3",
        "5.mp3",
    ];

    let audio = new Audio('media/' + effectCount + '.mp3');
    if (effectCount == effects.length) {
        effectCount = 1;
    } else {
        effectCount += 1
    }
    audio.play();
}

async function playLetter(char) {
    audioFile = char.toUpperCase() + ".wav";
    let audio = new Audio('media/' + audioFile);
    await sleep(400);
    audio.play();
}

function displayChar(e) {
    try {
        display = char.display(e.key);
        iconObj = char.icon(e.key)
        icon = iconObj["icon"];
        iconName = iconObj["iconName"];
        iconSrc = 'media/' + icon
        // document.getElementById('icon').className = icon;
        document.getElementById('icon').src = iconSrc;
        selectedLetter.textContent = display;
        iconName.textContent = iconName;
        document.getElementById('outerWrap').className = e.key
        playEffect();
        char.audio(e.key); b
    } catch (err) { }
}

var char = {
    a: {
        icons: {
            apple: "apple.svg",
            airplane: "airplane.svg",
        }
    },
    b: {
        icons: {
            bus: "bus.svg",
            bug: "bug.svg",
        }
    },
    c: {
        icons: {
            cat: "cat.svg",
            car: "car.svg",
        }
    },
    d: {
        icons: {
            dog: "dog.svg",
            duck: "duck.svg",
        }
    },
    e: {
        icons: {
            egg: "egg.svg",
            elephant: "elephant.svg"
        }
    },
    f: {
        icons: {
            fish: "fish.svg",
            flower: "flower.svg",
        }
    },
    g: {
        icons: {
            giraffe: "giraffe.svg",
            gift: "gift.svg",
        }
    },
    h: {
        icons: {
            hat: "hat.svg",
            heart: "heart.svg",
        }
    },
    i: {
        icons: {
            "ice cream": "ice cream.svg",
            island: "island.svg",
        }
    },
    j: {
        icons: {
            jewel: "jewel.svg",
            jellyfish: "jellyfish.svg",
        }
    },
    k: {
        icons: {
            kite: "kite.svg",
            keyboard: "keyboard.svg",
        }
    },
    l: {
        icons: {
            lemon: "lemon.svg",
            light: "light.svg",
        }
    },
    m: {
        icons: {
            monkey: "monkey.svg",
            mouse: "mouse.svg",
        }
    },
    n: {
        icons: {
            net: "net.svg",
            ninja: "ninja.svg",
        }
    },
    o: {
        icons: {
            onion: "onion.svg",
            owl: "owl.svg",
            orange: "orange.svg"
        }
    },
    p: {
        icons: {
            pen: "pen.svg",
            police: "police.svg",
            princess: "princess.svg",
        }
    },
    q: {
        icons: {
            question: "question.svg",
        }
    },
    r: {
        icons: {
            ring: "ring.svg",
            rope: "rope.svg",
        }
    },
    s: {
        icons: {
            sock: "sock.svg",
            star: "star.svg",
        }
    },
    t: {
        icons: {
            teeth: "teeth.svg",
            truck: "truck.svg",
        }
    },
    u: {
        icons: {
            umbrella: "umbrella.svg",
        }
    },
    v: {
        icons: {
            violin: "violin.svg",
        }
    },
    w: {
        icons: {
            watermelon: "watermelon.svg",
            wand: "wand.svg",
        }
    },
    x: {
        icons: {
            xylophone: "xylophone.svg",
        }
    },
    y: {
        icons: {
            yacht: "yacht.svg",
        }
    },
    z: {
        icons: {
            zebra: "zebra.svg",
        }
    },
    icon: function (c) {
        obj = this[c]
        keys = Object.keys(obj.icons)
        randomNum = Math.floor(Math.random() * keys.length);
        returnObj = {
            icon: obj.icons[keys[randomNum]],
            iconName: keys[randomNum],
        };
        return returnObj;
    },
    display: function (c) {
        returnStr = c.toUpperCase() + c.toLowerCase()
        return returnStr;
    },
    audio: async function (c) {
        audioFile = c.toUpperCase() + ".wav";
        let audio = new Audio('media/' + audioFile);
        await sleep(400);
        audio.play();
    },
}

document.addEventListener('keydown', displayChar);


