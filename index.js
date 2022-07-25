// Button click detection
document.querySelector("button").addEventListener("click", handleClick)

function handleClick() {
  location.reload()
}

// Declare variables for lane
var lane = Math.floor(Math.random() * 5) + 1

if (lane === 1) {
  document.querySelector(".lane p").innerHTML = "Top Lane"
  document.querySelector(".img1").setAttribute("src", "lane-img/top-lane.jpg")
  var champ1 = Math.floor(Math.random() * 45) + 1
  var champ2 = Math.floor(Math.random() * 45) + 1
  if (champ1 === 1) {
    document.querySelector(".champ1 p").innerHTML = "Aatrox"
    document.querySelector(".img2").setAttribute("src", "champ-img/aatrox.webp")
  } else if (champ1 === 2) {
    document.querySelector(".champ1 p").innerHTML = "Akali"
    document.querySelector(".img2").setAttribute("src", "champ-img/akali.webp")
  } else if (champ1 === 3) {
    document.querySelector(".champ1 p").innerHTML = "Camille"
    document.querySelector(".img2").setAttribute("src", "champ-img/camille.webp")
  } else if (champ1 === 4) {
    document.querySelector(".champ1 p").innerHTML = "Cho'Gath"
    document.querySelector(".img2").setAttribute("src", "champ-img/cho-gath.webp")
  } else if (champ1 === 5) {
    document.querySelector(".champ1 p").innerHTML = "Darius"
    document.querySelector(".img2").setAttribute("src", "champ-img/darius.webp")
  } else if (champ1 === 6) {
    document.querySelector(".champ1 p").innerHTML = "Dr. Mundo"
    document.querySelector(".img2").setAttribute("src", "champ-img/dr-mundo.webp")
  } else if (champ1 === 7) {
    document.querySelector(".champ1 p").innerHTML = "Fiora"
    document.querySelector(".img2").setAttribute("src", "champ-img/fiora.webp")
  } else if (champ1 === 8) {
    document.querySelector(".champ1 p").innerHTML = "Gangplank"
    document.querySelector(".img2").setAttribute("src", "champ-img/gangplank.webp")
  } else if (champ1 === 9) {
    document.querySelector(".champ1 p").innerHTML = "Garen"
    document.querySelector(".img2").setAttribute("src", "champ-img/garen.webp")
  } else if (champ1 === 10) {
    document.querySelector(".champ1 p").innerHTML = "Gnar"
    document.querySelector(".img2").setAttribute("src", "champ-img/gnar.webp")
  } else if (champ1 === 11) {
    document.querySelector(".champ1 p").innerHTML = "Gragas"
    document.querySelector(".img2").setAttribute("src", "champ-img/gragas.webp")
  } else if (champ1 === 12) {
    document.querySelector(".champ1 p").innerHTML = "Gwen"
    document.querySelector(".img2").setAttribute("src", "champ-img/gwen.webp")
  } else if (champ1 === 13) {
    document.querySelector(".champ1 p").innerHTML = "Heimerdinger"
    document.querySelector(".img2").setAttribute("src", "champ-img/heimerdinger.webp")
  } else if (champ1 === 14) {
    document.querySelector(".champ1 p").innerHTML = "Illaoi"
    document.querySelector(".img2").setAttribute("src", "champ-img/illaoi.webp")
  } else if (champ1 === 15) {
    document.querySelector(".champ1 p").innerHTML = "Irelia"
    document.querySelector(".img2").setAttribute("src", "champ-img/irelia.webp")
  } else if (champ1 === 16) {
    document.querySelector(".champ1 p").innerHTML = "Jax"
    document.querySelector(".img2").setAttribute("src", "champ-img/jax.webp")
  } else if (champ1 === 17) {
    document.querySelector(".champ1 p").innerHTML = "Jayce"
    document.querySelector(".img2").setAttribute("src", "champ-img/jayce.webp")
  } else if (champ1 === 18) {
    document.querySelector(".champ1 p").innerHTML = "Kayle"
    document.querySelector(".img2").setAttribute("src", "champ-img/kayle.webp")
  } else if (champ1 === 19) {
    document.querySelector(".champ1 p").innerHTML = "Kennen"
    document.querySelector(".img2").setAttribute("src", "champ-img/kennen.webp")
  } else if (champ1 === 20) {
    document.querySelector(".champ1 p").innerHTML = "Kled"
    document.querySelector(".img2").setAttribute("src", "champ-img/kled.webp")
  } else if (champ1 === 21) {
    document.querySelector(".champ1 p").innerHTML = "Lillia"
    document.querySelector(".img2").setAttribute("src", "champ-img/lillia.webp")
  } else if (champ1 === 22) {
    document.querySelector(".champ1 p").innerHTML = "Malphite"
    document.querySelector(".img2").setAttribute("src", "champ-img/malphite.webp")
  } else if (champ1 === 23) {
    document.querySelector(".champ1 p").innerHTML = "Mordekaiser"
    document.querySelector(".img2").setAttribute("src", "champ-img/mordekaiser.webp")
  } else if (champ1 === 24) {
    document.querySelector(".champ1 p").innerHTML = "Nasus"
    document.querySelector(".img2").setAttribute("src", "champ-img/nasus.webp")
  } else if (champ1 === 25) {
    document.querySelector(".champ1 p").innerHTML = "Olaf"
    document.querySelector(".img2").setAttribute("src", "champ-img/olaf.webp")
  } else if (champ1 === 26) {
    document.querySelector(".champ1 p").innerHTML = "Ornn"
    document.querySelector(".img2").setAttribute("src", "champ-img/ornn.webp")
  } else if (champ1 === 27) {
    document.querySelector(".champ1 p").innerHTML = "Quinn"
    document.querySelector(".img2").setAttribute("src", "champ-img/quinn.webp")
  } else if (champ1 === 28) {
    document.querySelector(".champ1 p").innerHTML = "Renekton"
    document.querySelector(".img2").setAttribute("src", "champ-img/renekton.webp")
  } else if (champ1 === 29) {
    document.querySelector(".champ1 p").innerHTML = "Riven"
    document.querySelector(".img2").setAttribute("src", "champ-img/riven.webp")
  } else if (champ1 === 30) {
    document.querySelector(".champ1 p").innerHTML = "Rumble"
    document.querySelector(".img2").setAttribute("src", "champ-img/rumble.webp")
  } else if (champ1 === 31) {
    document.querySelector(".champ1 p").innerHTML = "Sett"
    document.querySelector(".img2").setAttribute("src", "champ-img/sett.webp")
  } else if (champ1 === 32) {
    document.querySelector(".champ1 p").innerHTML = "Shen"
    document.querySelector(".img2").setAttribute("src", "champ-img/shen.webp")
  } else if (champ1 === 33) {
    document.querySelector(".champ1 p").innerHTML = "Singed"
    document.querySelector(".img2").setAttribute("src", "champ-img/singed.webp")
  } else if (champ1 === 34) {
    document.querySelector(".champ1 p").innerHTML = "Sion"
    document.querySelector(".img2").setAttribute("src", "champ-img/sion.webp")
  } else if (champ1 === 35) {
    document.querySelector(".champ1 p").innerHTML = "Swain"
    document.querySelector(".img2").setAttribute("src", "champ-img/swain.webp")
  } else if (champ1 === 36) {
    document.querySelector(".champ1 p").innerHTML = "Tahm Kench"
    document.querySelector(".img2").setAttribute("src", "champ-img/tahm-kench.webp")
  } else if (champ1 === 37) {
    document.querySelector(".champ1 p").innerHTML = "Teemo"
    document.querySelector(".img2").setAttribute("src", "champ-img/teemo.webp")
  } else if (champ1 === 38) {
    document.querySelector(".champ1 p").innerHTML = "Tryndamere"
    document.querySelector(".img2").setAttribute("src", "champ-img/tryndamere.webp")
  } else if (champ1 === 39) {
    document.querySelector(".champ1 p").innerHTML = "Urgot"
    document.querySelector(".img2").setAttribute("src", "champ-img/urgot.webp")
  } else if (champ1 === 40) {
    document.querySelector(".champ1 p").innerHTML = "Vayne"
    document.querySelector(".img2").setAttribute("src", "champ-img/vayne.webp")
  } else if (champ1 === 41) {
    document.querySelector(".champ1 p").innerHTML = "Volibear"
    document.querySelector(".img2").setAttribute("src", "champ-img/volibear.webp")
  } else if (champ1 === 42) {
    document.querySelector(".champ1 p").innerHTML = "Wukong"
    document.querySelector(".img2").setAttribute("src", "champ-img/wukong.webp")
  } else if (champ1 === 43) {
    document.querySelector(".champ1 p").innerHTML = "Yasuo"
    document.querySelector(".img2").setAttribute("src", "champ-img/yasuo.webp")
  } else if (champ1 === 44) {
    document.querySelector(".champ1 p").innerHTML = "Yone"
    document.querySelector(".img2").setAttribute("src", "champ-img/yone.png")
  } else if (champ1 === 45) {
    document.querySelector(".champ1 p").innerHTML = "Yorick"
    document.querySelector(".img2").setAttribute("src", "champ-img/yorick.webp")
  }
  if (champ2 === 1) {
    document.querySelector(".champ2 p").innerHTML = "Aatrox"
    document.querySelector(".img3").setAttribute("src", "champ-img/aatrox.webp")
  } else if (champ2 === 2) {
    document.querySelector(".champ2 p").innerHTML = "Akali"
    document.querySelector(".img3").setAttribute("src", "champ-img/akali.webp")
  } else if (champ2 === 3) {
    document.querySelector(".champ2 p").innerHTML = "Camille"
    document.querySelector(".img3").setAttribute("src", "champ-img/camille.webp")
  } else if (champ2 === 4) {
    document.querySelector(".champ2 p").innerHTML = "Cho'Gath"
    document.querySelector(".img3").setAttribute("src", "champ-img/cho-gath.webp")
  } else if (champ2 === 5) {
    document.querySelector(".champ2 p").innerHTML = "Darius"
    document.querySelector(".img3").setAttribute("src", "champ-img/darius.webp")
  } else if (champ2 === 6) {
    document.querySelector(".champ2 p").innerHTML = "Dr. Mundo"
    document.querySelector(".img3").setAttribute("src", "champ-img/dr-mundo.webp")
  } else if (champ2 === 7) {
    document.querySelector(".champ2 p").innerHTML = "Fiora"
    document.querySelector(".img3").setAttribute("src", "champ-img/fiora.webp")
  } else if (champ2 === 8) {
    document.querySelector(".champ2 p").innerHTML = "Gangplank"
    document.querySelector(".img3").setAttribute("src", "champ-img/gangplank.webp")
  } else if (champ2 === 9) {
    document.querySelector(".champ2 p").innerHTML = "Garen"
    document.querySelector(".img3").setAttribute("src", "champ-img/garen.webp")
  } else if (champ2 === 10) {
    document.querySelector(".champ2 p").innerHTML = "Gnar"
    document.querySelector(".img3").setAttribute("src", "champ-img/gnar.webp")
  } else if (champ2 === 11) {
    document.querySelector(".champ2 p").innerHTML = "Gragas"
    document.querySelector(".img3").setAttribute("src", "champ-img/gragas.webp")
  } else if (champ2 === 12) {
    document.querySelector(".champ2 p").innerHTML = "Gwen"
    document.querySelector(".img3").setAttribute("src", "champ-img/gwen.webp")
  } else if (champ2 === 13) {
    document.querySelector(".champ2 p").innerHTML = "Heimerdinger"
    document.querySelector(".img3").setAttribute("src", "champ-img/heimerdinger.webp")
  } else if (champ2 === 14) {
    document.querySelector(".champ2 p").innerHTML = "Illaoi"
    document.querySelector(".img3").setAttribute("src", "champ-img/illaoi.webp")
  } else if (champ2 === 15) {
    document.querySelector(".champ2 p").innerHTML = "Irelia"
    document.querySelector(".img3").setAttribute("src", "champ-img/irelia.webp")
  } else if (champ2 === 16) {
    document.querySelector(".champ2 p").innerHTML = "Jax"
    document.querySelector(".img3").setAttribute("src", "champ-img/jax.webp")
  } else if (champ2 === 17) {
    document.querySelector(".champ2 p").innerHTML = "Jayce"
    document.querySelector(".img3").setAttribute("src", "champ-img/jayce.webp")
  } else if (champ2 === 18) {
    document.querySelector(".champ2 p").innerHTML = "Kayle"
    document.querySelector(".img3").setAttribute("src", "champ-img/kayle.webp")
  } else if (champ2 === 19) {
    document.querySelector(".champ2 p").innerHTML = "Kennen"
    document.querySelector(".img3").setAttribute("src", "champ-img/kennen.webp")
  } else if (champ2 === 20) {
    document.querySelector(".champ2 p").innerHTML = "Kled"
    document.querySelector(".img3").setAttribute("src", "champ-img/kled.webp")
  } else if (champ2 === 21) {
    document.querySelector(".champ2 p").innerHTML = "Lillia"
    document.querySelector(".img3").setAttribute("src", "champ-img/lillia.webp")
  } else if (champ2 === 22) {
    document.querySelector(".champ2 p").innerHTML = "Malphite"
    document.querySelector(".img3").setAttribute("src", "champ-img/malphite.webp")
  } else if (champ2 === 23) {
    document.querySelector(".champ2 p").innerHTML = "Mordekaiser"
    document.querySelector(".img3").setAttribute("src", "champ-img/mordekaiser.webp")
  } else if (champ2 === 24) {
    document.querySelector(".champ2 p").innerHTML = "Nasus"
    document.querySelector(".img3").setAttribute("src", "champ-img/nasus.webp")
  } else if (champ2 === 25) {
    document.querySelector(".champ2 p").innerHTML = "Olaf"
    document.querySelector(".img3").setAttribute("src", "champ-img/olaf.webp")
  } else if (champ2 === 26) {
    document.querySelector(".champ2 p").innerHTML = "Ornn"
    document.querySelector(".img3").setAttribute("src", "champ-img/ornn.webp")
  } else if (champ2 === 27) {
    document.querySelector(".champ2 p").innerHTML = "Quinn"
    document.querySelector(".img3").setAttribute("src", "champ-img/quinn.webp")
  } else if (champ2 === 28) {
    document.querySelector(".champ2 p").innerHTML = "Renekton"
    document.querySelector(".img3").setAttribute("src", "champ-img/renekton.webp")
  } else if (champ2 === 29) {
    document.querySelector(".champ2 p").innerHTML = "Riven"
    document.querySelector(".img3").setAttribute("src", "champ-img/riven.webp")
  } else if (champ2 === 30) {
    document.querySelector(".champ2 p").innerHTML = "Rumble"
    document.querySelector(".img3").setAttribute("src", "champ-img/rumble.webp")
  } else if (champ2 === 31) {
    document.querySelector(".champ2 p").innerHTML = "Sett"
    document.querySelector(".img3").setAttribute("src", "champ-img/sett.webp")
  } else if (champ2 === 32) {
    document.querySelector(".champ2 p").innerHTML = "Shen"
    document.querySelector(".img3").setAttribute("src", "champ-img/shen.webp")
  } else if (champ2 === 33) {
    document.querySelector(".champ2 p").innerHTML = "Singed"
    document.querySelector(".img3").setAttribute("src", "champ-img/singed.webp")
  } else if (champ2 === 34) {
    document.querySelector(".champ2 p").innerHTML = "Sion"
    document.querySelector(".img3").setAttribute("src", "champ-img/sion.webp")
  } else if (champ2 === 35) {
    document.querySelector(".champ2 p").innerHTML = "Swain"
    document.querySelector(".img3").setAttribute("src", "champ-img/swain.webp")
  } else if (champ2 === 36) {
    document.querySelector(".champ2 p").innerHTML = "Tahm Kench"
    document.querySelector(".img3").setAttribute("src", "champ-img/tahm-kench.webp")
  } else if (champ2 === 37) {
    document.querySelector(".champ2 p").innerHTML = "Teemo"
    document.querySelector(".img3").setAttribute("src", "champ-img/teemo.webp")
  } else if (champ2 === 38) {
    document.querySelector(".champ2 p").innerHTML = "Tryndamere"
    document.querySelector(".img3").setAttribute("src", "champ-img/tryndamere.webp")
  } else if (champ2 === 39) {
    document.querySelector(".champ2 p").innerHTML = "Urgot"
    document.querySelector(".img3").setAttribute("src", "champ-img/urgot.webp")
  } else if (champ2 === 40) {
    document.querySelector(".champ2 p").innerHTML = "Vayne"
    document.querySelector(".img3").setAttribute("src", "champ-img/vayne.webp")
  } else if (champ2 === 41) {
    document.querySelector(".champ2 p").innerHTML = "Volibear"
    document.querySelector(".img3").setAttribute("src", "champ-img/volibear.webp")
  } else if (champ2 === 42) {
    document.querySelector(".champ2 p").innerHTML = "Wukong"
    document.querySelector(".img3").setAttribute("src", "champ-img/wukong.webp")
  } else if (champ2 === 43) {
    document.querySelector(".champ2 p").innerHTML = "Yasuo"
    document.querySelector(".img3").setAttribute("src", "champ-img/yasuo.webp")
  } else if (champ2 === 44) {
    document.querySelector(".champ2 p").innerHTML = "Yone"
    document.querySelector(".img3").setAttribute("src", "champ-img/yone.png")
  } else if (champ2 === 45) {
    document.querySelector(".champ2 p").innerHTML = "Yorick"
    document.querySelector(".img3").setAttribute("src", "champ-img/yorick.webp")
  }
} else if (lane === 2) {
  document.querySelector(".lane p").innerHTML = "Jungle"
  document.querySelector(".img1").setAttribute("src", "lane-img/jungle.jpg")
  var champ1 = Math.floor(Math.random() * 40) + 1
  var champ2 = Math.floor(Math.random() * 40) + 1
  if (champ1 === 1) {
    document.querySelector(".champ1 p").innerHTML = "Amumu"
    document.querySelector(".img2").setAttribute("src", "champ-img/amumu.webp")
  } else if (champ1 === 2) {
    document.querySelector(".champ1 p").innerHTML = "Diana"
    document.querySelector(".img2").setAttribute("src", "champ-img/diana.webp")
  } else if (champ1 === 3) {
    document.querySelector(".champ1 p").innerHTML = "Ekko"
    document.querySelector(".img2").setAttribute("src", "champ-img/ekko.webp")
  } else if (champ1 === 4) {
    document.querySelector(".champ1 p").innerHTML = "Elise"
    document.querySelector(".img2").setAttribute("src", "champ-img/elise.webp")
  } else if (champ1 === 5) {
    document.querySelector(".champ1 p").innerHTML = "Evelynn"
    document.querySelector(".img2").setAttribute("src", "champ-img/evelynn.webp")
  } else if (champ1 === 6) {
    document.querySelector(".champ1 p").innerHTML = "Fiddlesticks"
    document.querySelector(".img2").setAttribute("src", "champ-img/fiddlesticks.webp")
  } else if (champ1 === 7) {
    document.querySelector(".champ1 p").innerHTML = "Graves"
    document.querySelector(".img2").setAttribute("src", "champ-img/graves.webp")
  } else if (champ1 === 8) {
    document.querySelector(".champ1 p").innerHTML = "Hecarim"
    document.querySelector(".img2").setAttribute("src", "champ-img/hecarim.webp")
  } else if (champ1 === 9) {
    document.querySelector(".champ1 p").innerHTML = "Ivern"
    document.querySelector(".img2").setAttribute("src", "champ-img/ivern.webp")
  } else if (champ1 === 10) {
    document.querySelector(".champ1 p").innerHTML = "Jarvan IV"
    document.querySelector(".img2").setAttribute("src", "champ-img/j4.webp")
  } else if (champ1 === 11) {
    document.querySelector(".champ1 p").innerHTML = "Karthus"
    document.querySelector(".img2").setAttribute("src", "champ-img/karthus.webp")
  } else if (champ1 === 12) {
    document.querySelector(".champ1 p").innerHTML = "Kayn"
    document.querySelector(".img2").setAttribute("src", "champ-img/kayn.webp")
  } else if (champ1 === 13) {
    document.querySelector(".champ1 p").innerHTML = "Kha'Zix"
    document.querySelector(".img2").setAttribute("src", "champ-img/kha-zix.webp")
  } else if (champ1 === 14) {
    document.querySelector(".champ1 p").innerHTML = "Kindred"
    document.querySelector(".img2").setAttribute("src", "champ-img/kindred.webp")
  } else if (champ1 === 15) {
    document.querySelector(".champ1 p").innerHTML = "Lee Sin"
    document.querySelector(".img2").setAttribute("src", "champ-img/lee-sin.webp")
  } else if (champ1 === 16) {
    document.querySelector(".champ1 p").innerHTML = "Lillia"
    document.querySelector(".img2").setAttribute("src", "champ-img/lillia.webp")
  } else if (champ1 === 17) {
    document.querySelector(".champ1 p").innerHTML = "Master Yi"
    document.querySelector(".img2").setAttribute("src", "champ-img/master-yi.webp")
  } else if (champ1 === 18) {
    document.querySelector(".champ1 p").innerHTML = "Nidalee"
    document.querySelector(".img2").setAttribute("src", "champ-img/nidalee.webp")
  } else if (champ1 === 19) {
    document.querySelector(".champ1 p").innerHTML = "Nocturne"
    document.querySelector(".img2").setAttribute("src", "champ-img/nocturne.webp")
  } else if (champ1 === 20) {
    document.querySelector(".champ1 p").innerHTML = "Nunu & Willump"
    document.querySelector(".img2").setAttribute("src", "champ-img/nunu.webp")
  } else if (champ1 === 21) {
    document.querySelector(".champ1 p").innerHTML = "Poppy"
    document.querySelector(".img2").setAttribute("src", "champ-img/poppy.webp")
  } else if (champ1 === 22) {
    document.querySelector(".champ1 p").innerHTML = "Rammus"
    document.querySelector(".img2").setAttribute("src", "champ-img/rammus.webp")
  } else if (champ1 === 23) {
    document.querySelector(".champ1 p").innerHTML = "Rek'Sai"
    document.querySelector(".img2").setAttribute("src", "champ-img/rek-sai.webp")
  } else if (champ1 === 24) {
    document.querySelector(".champ1 p").innerHTML = "Rengar"
    document.querySelector(".img2").setAttribute("src", "champ-img/rengar.webp")
  } else if (champ1 === 25) {
    document.querySelector(".champ1 p").innerHTML = "Sejuani"
    document.querySelector(".img2").setAttribute("src", "champ-img/sejuani.webp")
  } else if (champ1 === 26) {
    document.querySelector(".champ1 p").innerHTML = "Shaco"
    document.querySelector(".img2").setAttribute("src", "champ-img/shaco.webp")
  } else if (champ1 === 27) {
    document.querySelector(".champ1 p").innerHTML = "Shyvana"
    document.querySelector(".img2").setAttribute("src", "champ-img/shyvana.webp")
  } else if (champ1 === 28) {
    document.querySelector(".champ1 p").innerHTML = "Skarner"
    document.querySelector(".img2").setAttribute("src", "champ-img/skarner.webp")
  } else if (champ1 === 29) {
    document.querySelector(".champ1 p").innerHTML = "Taliyah"
    document.querySelector(".img2").setAttribute("src", "champ-img/taliyah.webp")
  } else if (champ1 === 30) {
    document.querySelector(".champ1 p").innerHTML = "Talon"
    document.querySelector(".img2").setAttribute("src", "champ-img/talon.webp")
  } else if (champ1 === 31) {
    document.querySelector(".champ1 p").innerHTML = "Trundle"
    document.querySelector(".img2").setAttribute("src", "champ-img/trundle.webp")
  } else if (champ1 === 32) {
    document.querySelector(".champ1 p").innerHTML = "Udyr"
    document.querySelector(".img2").setAttribute("src", "champ-img/udyr.webp")
  } else if (champ1 === 33) {
    document.querySelector(".champ1 p").innerHTML = "Vi"
    document.querySelector(".img2").setAttribute("src", "champ-img/vi.webp")
  } else if (champ1 === 34) {
    document.querySelector(".champ1 p").innerHTML = "Viego"
    document.querySelector(".img2").setAttribute("src", "champ-img/viego.webp")
  } else if (champ1 === 35) {
    document.querySelector(".champ1 p").innerHTML = "Volibear"
    document.querySelector(".img2").setAttribute("src", "champ-img/volibear.webp")
  } else if (champ1 === 36) {
    document.querySelector(".champ1 p").innerHTML = "Warwick"
    document.querySelector(".img2").setAttribute("src", "champ-img/warwick.webp")
  } else if (champ1 === 37) {
    document.querySelector(".champ1 p").innerHTML = "Wukong"
    document.querySelector(".img2").setAttribute("src", "champ-img/wukong.webp")
  } else if (champ1 === 38) {
    document.querySelector(".champ1 p").innerHTML = "Xin Zhao"
    document.querySelector(".img2").setAttribute("src", "champ-img/xin-zhao.webp")
  } else if (champ1 === 39) {
    document.querySelector(".champ1 p").innerHTML = "Zac"
    document.querySelector(".img2").setAttribute("src", "champ-img/zac.webp")
  } else if (champ1 === 40) {
    document.querySelector(".champ1 p").innerHTML = "Zed"
    document.querySelector(".img2").setAttribute("src", "champ-img/zed.webp")
  }
  if (champ2 === 1) {
    document.querySelector(".champ2 p").innerHTML = "Amumu"
    document.querySelector(".img3").setAttribute("src", "champ-img/amumu.webp")
  } else if (champ2 === 2) {
    document.querySelector(".champ2 p").innerHTML = "Diana"
    document.querySelector(".img3").setAttribute("src", "champ-img/diana.webp")
  } else if (champ2 === 3) {
    document.querySelector(".champ2 p").innerHTML = "Ekko"
    document.querySelector(".img3").setAttribute("src", "champ-img/ekko.webp")
  } else if (champ2 === 4) {
    document.querySelector(".champ2 p").innerHTML = "Elise"
    document.querySelector(".img3").setAttribute("src", "champ-img/elise.webp")
  } else if (champ2 === 5) {
    document.querySelector(".champ2 p").innerHTML = "Evelynn"
    document.querySelector(".img3").setAttribute("src", "champ-img/evelynn.webp")
  } else if (champ2 === 6) {
    document.querySelector(".champ2 p").innerHTML = "Fiddlesticks"
    document.querySelector(".img3").setAttribute("src", "champ-img/fiddlesticks.webp")
  } else if (champ2 === 7) {
    document.querySelector(".champ2 p").innerHTML = "Graves"
    document.querySelector(".img3").setAttribute("src", "champ-img/graves.webp")
  } else if (champ2 === 8) {
    document.querySelector(".champ2 p").innerHTML = "Hecarim"
    document.querySelector(".img3").setAttribute("src", "champ-img/hecarim.webp")
  } else if (champ2 === 9) {
    document.querySelector(".champ2 p").innerHTML = "Ivern"
    document.querySelector(".img3").setAttribute("src", "champ-img/ivern.webp")
  } else if (champ2 === 10) {
    document.querySelector(".champ2 p").innerHTML = "Jarvan IV"
    document.querySelector(".img3").setAttribute("src", "champ-img/j4.webp")
  } else if (champ2 === 11) {
    document.querySelector(".champ2 p").innerHTML = "Karthus"
    document.querySelector(".img3").setAttribute("src", "champ-img/karthus.webp")
  } else if (champ2 === 12) {
    document.querySelector(".champ2 p").innerHTML = "Kayn"
    document.querySelector(".img3").setAttribute("src", "champ-img/kayn.webp")
  } else if (champ2 === 13) {
    document.querySelector(".champ2 p").innerHTML = "Kha'Zix"
    document.querySelector(".img3").setAttribute("src", "champ-img/kha-zix.webp")
  } else if (champ2 === 14) {
    document.querySelector(".champ2 p").innerHTML = "Kindred"
    document.querySelector(".img3").setAttribute("src", "champ-img/kindred.webp")
  } else if (champ2 === 15) {
    document.querySelector(".champ2 p").innerHTML = "Lee Sin"
    document.querySelector(".img3").setAttribute("src", "champ-img/lee-sin.webp")
  } else if (champ2 === 16) {
    document.querySelector(".champ2 p").innerHTML = "Lillia"
    document.querySelector(".img3").setAttribute("src", "champ-img/lillia.webp")
  } else if (champ2 === 17) {
    document.querySelector(".champ2 p").innerHTML = "Master Yi"
    document.querySelector(".img3").setAttribute("src", "champ-img/master-yi.webp")
  } else if (champ2 === 18) {
    document.querySelector(".champ2 p").innerHTML = "Nidalee"
    document.querySelector(".img3").setAttribute("src", "champ-img/nidalee.webp")
  } else if (champ2 === 19) {
    document.querySelector(".champ2 p").innerHTML = "Nocturne"
    document.querySelector(".img3").setAttribute("src", "champ-img/nocturne.webp")
  } else if (champ2 === 20) {
    document.querySelector(".champ2 p").innerHTML = "Nunu & Willump"
    document.querySelector(".img3").setAttribute("src", "champ-img/nunu.webp")
  } else if (champ2 === 21) {
    document.querySelector(".champ2 p").innerHTML = "Poppy"
    document.querySelector(".img3").setAttribute("src", "champ-img/poppy.webp")
  } else if (champ2 === 22) {
    document.querySelector(".champ2 p").innerHTML = "Rammus"
    document.querySelector(".img3").setAttribute("src", "champ-img/rammus.webp")
  } else if (champ2 === 23) {
    document.querySelector(".champ2 p").innerHTML = "Rek'Sai"
    document.querySelector(".img3").setAttribute("src", "champ-img/rek-sai.webp")
  } else if (champ2 === 24) {
    document.querySelector(".champ2 p").innerHTML = "Rengar"
    document.querySelector(".img3").setAttribute("src", "champ-img/rengar.webp")
  } else if (champ2 === 25) {
    document.querySelector(".champ2 p").innerHTML = "Sejuani"
    document.querySelector(".img3").setAttribute("src", "champ-img/sejuani.webp")
  } else if (champ2 === 26) {
    document.querySelector(".champ2 p").innerHTML = "Shaco"
    document.querySelector(".img3").setAttribute("src", "champ-img/shaco.webp")
  } else if (champ2 === 27) {
    document.querySelector(".champ2 p").innerHTML = "Shyvana"
    document.querySelector(".img3").setAttribute("src", "champ-img/shyvana.webp")
  } else if (champ2 === 28) {
    document.querySelector(".champ2 p").innerHTML = "Skarner"
    document.querySelector(".img3").setAttribute("src", "champ-img/skarner.webp")
  } else if (champ2 === 29) {
    document.querySelector(".champ2 p").innerHTML = "Taliyah"
    document.querySelector(".img3").setAttribute("src", "champ-img/taliyah.webp")
  } else if (champ2 === 30) {
    document.querySelector(".champ2 p").innerHTML = "Talon"
    document.querySelector(".img3").setAttribute("src", "champ-img/talon.webp")
  } else if (champ2 === 31) {
    document.querySelector(".champ2 p").innerHTML = "Trundle"
    document.querySelector(".img3").setAttribute("src", "champ-img/trundle.webp")
  } else if (champ2 === 32) {
    document.querySelector(".champ2 p").innerHTML = "Udyr"
    document.querySelector(".img3").setAttribute("src", "champ-img/udyr.webp")
  } else if (champ2 === 33) {
    document.querySelector(".champ2 p").innerHTML = "Vi"
    document.querySelector(".img3").setAttribute("src", "champ-img/vi.webp")
  } else if (champ2 === 34) {
    document.querySelector(".champ2 p").innerHTML = "Viego"
    document.querySelector(".img3").setAttribute("src", "champ-img/viego.webp")
  } else if (champ2 === 35) {
    document.querySelector(".champ2 p").innerHTML = "Volibear"
    document.querySelector(".img3").setAttribute("src", "champ-img/volibear.webp")
  } else if (champ2 === 36) {
    document.querySelector(".champ2 p").innerHTML = "Warwick"
    document.querySelector(".img3").setAttribute("src", "champ-img/warwick.webp")
  } else if (champ2 === 37) {
    document.querySelector(".champ2 p").innerHTML = "Wukong"
    document.querySelector(".img3").setAttribute("src", "champ-img/wukong.webp")
  } else if (champ2 === 38) {
    document.querySelector(".champ2 p").innerHTML = "Xin Zhao"
    document.querySelector(".img3").setAttribute("src", "champ-img/xin-zhao.webp")
  } else if (champ2 === 39) {
    document.querySelector(".champ2 p").innerHTML = "Zac"
    document.querySelector(".img3").setAttribute("src", "champ-img/zac.webp")
  } else if (champ2 === 40) {
    document.querySelector(".champ2 p").innerHTML = "Zed"
    document.querySelector(".img3").setAttribute("src", "champ-img/zed.webp")
  }
} else if (lane === 3) {
  document.querySelector(".lane p").innerHTML = "Mid Lane"
  document.querySelector(".img1").setAttribute("src", "lane-img/mid-lane.jpg")
  var champ1 = Math.floor(Math.random() * 40) + 1
  var champ2 = Math.floor(Math.random() * 40) + 1
  if (champ1 === 1) {
    document.querySelector(".champ1 p").innerHTML = "Ahri"
    document.querySelector(".img2").setAttribute("src", "champ-img/ahri.webp")
  } else if (champ1 === 2) {
    document.querySelector(".champ1 p").innerHTML = "Akali"
    document.querySelector(".img2").setAttribute("src", "champ-img/akali.webp")
  } else if (champ1 === 3) {
    document.querySelector(".champ1 p").innerHTML = "Akshan"
    document.querySelector(".img2").setAttribute("src", "champ-img/akshan.webp")
  } else if (champ1 === 4) {
    document.querySelector(".champ1 p").innerHTML = "Anivia"
    document.querySelector(".img2").setAttribute("src", "champ-img/anivia.webp")
  } else if (champ1 === 5) {
    document.querySelector(".champ1 p").innerHTML = "Annie"
    document.querySelector(".img2").setAttribute("src", "champ-img/annie.webp")
  } else if (champ1 === 6) {
    document.querySelector(".champ1 p").innerHTML = "Aurelion Sol"
    document.querySelector(".img2").setAttribute("src", "champ-img/aurelion-sol.webp")
  } else if (champ1 === 7) {
    document.querySelector(".champ1 p").innerHTML = "Azir"
    document.querySelector(".img2").setAttribute("src", "champ-img/azir.webp")
  } else if (champ1 === 8) {
    document.querySelector(".champ1 p").innerHTML = "Cassiopeia"
    document.querySelector(".img2").setAttribute("src", "champ-img/cassiopeia.webp")
  } else if (champ1 === 9) {
    document.querySelector(".champ1 p").innerHTML = "Corki"
    document.querySelector(".img2").setAttribute("src", "champ-img/corki.webp")
  } else if (champ1 === 10) {
    document.querySelector(".champ1 p").innerHTML = "Ekko"
    document.querySelector(".img2").setAttribute("src", "champ-img/ekko.webp")
  } else if (champ1 === 11) {
    document.querySelector(".champ1 p").innerHTML = "Fizz"
    document.querySelector(".img2").setAttribute("src", "champ-img/fizz.webp")
  } else if (champ1 === 12) {
    document.querySelector(".champ1 p").innerHTML = "Galio"
    document.querySelector(".img2").setAttribute("src", "champ-img/galio.webp")
  } else if (champ1 === 13) {
    document.querySelector(".champ1 p").innerHTML = "Gangplank"
    document.querySelector(".img2").setAttribute("src", "champ-img/gangplank.webp")
  } else if (champ1 === 14) {
    document.querySelector(".champ1 p").innerHTML = "Heimerdinger"
    document.querySelector(".img2").setAttribute("src", "champ-img/heimerdinger.webp")
  } else if (champ1 === 15) {
    document.querySelector(".champ1 p").innerHTML = "Irelia"
    document.querySelector(".img2").setAttribute("src", "champ-img/irelia.webp")
  } else if (champ1 === 16) {
    document.querySelector(".champ1 p").innerHTML = "Kassadin"
    document.querySelector(".img2").setAttribute("src", "champ-img/kassadin.webp")
  } else if (champ1 === 17) {
    document.querySelector(".champ1 p").innerHTML = "Katarina"
    document.querySelector(".img2").setAttribute("src", "champ-img/katarina.webp")
  } else if (champ1 === 18) {
    document.querySelector(".champ1 p").innerHTML = "LeBlanc"
    document.querySelector(".img2").setAttribute("src", "champ-img/leblanc.webp")
  } else if (champ1 === 19) {
    document.querySelector(".champ1 p").innerHTML = "Lissandra"
    document.querySelector(".img2").setAttribute("src", "champ-img/lissandra.webp")
  } else if (champ1 === 20) {
    document.querySelector(".champ1 p").innerHTML = "Lux"
    document.querySelector(".img2").setAttribute("src", "champ-img/lux.webp")
  } else if (champ1 === 21) {
    document.querySelector(".champ1 p").innerHTML = "Malzahar"
    document.querySelector(".img2").setAttribute("src", "champ-img/malzahar.webp")
  } else if (champ1 === 22) {
    document.querySelector(".champ1 p").innerHTML = "Neeko"
    document.querySelector(".img2").setAttribute("src", "champ-img/neeko.webp")
  } else if (champ1 === 23) {
    document.querySelector(".champ1 p").innerHTML = "Orianna"
    document.querySelector(".img2").setAttribute("src", "champ-img/orianna.webp")
  } else if (champ1 === 24) {
    document.querySelector(".champ1 p").innerHTML = "Qiyana"
    document.querySelector(".img2").setAttribute("src", "champ-img/qiyana.webp")
  } else if (champ1 === 25) {
    document.querySelector(".champ1 p").innerHTML = "Ryze"
    document.querySelector(".img2").setAttribute("src", "champ-img/ryze.webp")
  } else if (champ1 === 26) {
    document.querySelector(".champ1 p").innerHTML = "Swain"
    document.querySelector(".img2").setAttribute("src", "champ-img/swain.webp")
  } else if (champ1 === 27) {
    document.querySelector(".champ1 p").innerHTML = "Sylas"
    document.querySelector(".img2").setAttribute("src", "champ-img/sylas.webp")
  } else if (champ1 === 28) {
    document.querySelector(".champ1 p").innerHTML = "Syndra"
    document.querySelector(".img2").setAttribute("src", "champ-img/syndra.webp")
  } else if (champ1 === 29) {
    document.querySelector(".champ1 p").innerHTML = "Taliyah"
    document.querySelector(".img2").setAttribute("src", "champ-img/taliyah.webp")
  } else if (champ1 === 30) {
    document.querySelector(".champ1 p").innerHTML = "Talon"
    document.querySelector(".img2").setAttribute("src", "champ-img/talon.webp")
  } else if (champ1 === 31) {
    document.querySelector(".champ1 p").innerHTML = "Twisted Fate"
    document.querySelector(".img2").setAttribute("src", "champ-img/twisted-fate.webp")
  } else if (champ1 === 32) {
    document.querySelector(".champ1 p").innerHTML = "Veigar"
    document.querySelector(".img2").setAttribute("src", "champ-img/veigar.webp")
  } else if (champ1 === 33) {
    document.querySelector(".champ1 p").innerHTML = "Vex"
    document.querySelector(".img2").setAttribute("src", "champ-img/vex.webp")
  } else if (champ1 === 34) {
    document.querySelector(".champ1 p").innerHTML = "Viktor"
    document.querySelector(".img2").setAttribute("src", "champ-img/viktor.webp")
  } else if (champ1 === 35) {
    document.querySelector(".champ1 p").innerHTML = "Vladimir"
    document.querySelector(".img2").setAttribute("src", "champ-img/vladimir.webp")
  } else if (champ1 === 36) {
    document.querySelector(".champ1 p").innerHTML = "Xerath"
    document.querySelector(".img2").setAttribute("src", "champ-img/xerath.webp")
  } else if (champ1 === 37) {
    document.querySelector(".champ1 p").innerHTML = "Yasuo"
    document.querySelector(".img2").setAttribute("src", "champ-img/yasuo.webp")
  } else if (champ1 === 38) {
    document.querySelector(".champ1 p").innerHTML = "Yone"
    document.querySelector(".img2").setAttribute("src", "champ-img/yone.png")
  } else if (champ1 === 39) {
    document.querySelector(".champ1 p").innerHTML = "Zed"
    document.querySelector(".img2").setAttribute("src", "champ-img/zed.webp")
  } else if (champ1 === 40) {
    document.querySelector(".champ1 p").innerHTML = "Zoe"
    document.querySelector(".img2").setAttribute("src", "champ-img/zoe.webp")
  }
  if (champ2 === 1) {
    document.querySelector(".champ2 p").innerHTML = "Ahri"
    document.querySelector(".img3").setAttribute("src", "champ-img/ahri.webp")
  } else if (champ2 === 2) {
    document.querySelector(".champ2 p").innerHTML = "Akali"
    document.querySelector(".img3").setAttribute("src", "champ-img/akali.webp")
  } else if (champ2 === 3) {
    document.querySelector(".champ2 p").innerHTML = "Akshan"
    document.querySelector(".img3").setAttribute("src", "champ-img/akshan.webp")
  } else if (champ2 === 4) {
    document.querySelector(".champ2 p").innerHTML = "Anivia"
    document.querySelector(".img3").setAttribute("src", "champ-img/anivia.webp")
  } else if (champ2 === 5) {
    document.querySelector(".champ2 p").innerHTML = "Annie"
    document.querySelector(".img3").setAttribute("src", "champ-img/annie.webp")
  } else if (champ2 === 6) {
    document.querySelector(".champ2 p").innerHTML = "Aurelion Sol"
    document.querySelector(".img3").setAttribute("src", "champ-img/aurelion-sol.webp")
  } else if (champ2 === 7) {
    document.querySelector(".champ2 p").innerHTML = "Azir"
    document.querySelector(".img3").setAttribute("src", "champ-img/azir.webp")
  } else if (champ2 === 8) {
    document.querySelector(".champ2 p").innerHTML = "Cassiopeia"
    document.querySelector(".img3").setAttribute("src", "champ-img/cassiopeia.webp")
  } else if (champ2 === 9) {
    document.querySelector(".champ2 p").innerHTML = "Corki"
    document.querySelector(".img3").setAttribute("src", "champ-img/corki.webp")
  } else if (champ2 === 10) {
    document.querySelector(".champ2 p").innerHTML = "Ekko"
    document.querySelector(".img3").setAttribute("src", "champ-img/ekko.webp")
  } else if (champ2 === 11) {
    document.querySelector(".champ2 p").innerHTML = "Fizz"
    document.querySelector(".img3").setAttribute("src", "champ-img/fizz.webp")
  } else if (champ2 === 12) {
    document.querySelector(".champ2 p").innerHTML = "Galio"
    document.querySelector(".img3").setAttribute("src", "champ-img/galio.webp")
  } else if (champ2 === 13) {
    document.querySelector(".champ2 p").innerHTML = "Gangplank"
    document.querySelector(".img3").setAttribute("src", "champ-img/gangplank.webp")
  } else if (champ2 === 14) {
    document.querySelector(".champ2 p").innerHTML = "Heimerdinger"
    document.querySelector(".img3").setAttribute("src", "champ-img/heimerdinger.webp")
  } else if (champ2 === 15) {
    document.querySelector(".champ2 p").innerHTML = "Irelia"
    document.querySelector(".img3").setAttribute("src", "champ-img/irelia.webp")
  } else if (champ2 === 16) {
    document.querySelector(".champ2 p").innerHTML = "Kassadin"
    document.querySelector(".img3").setAttribute("src", "champ-img/kassadin.webp")
  } else if (champ2 === 17) {
    document.querySelector(".champ2 p").innerHTML = "Katarina"
    document.querySelector(".img3").setAttribute("src", "champ-img/katarina.webp")
  } else if (champ2 === 18) {
    document.querySelector(".champ2 p").innerHTML = "LeBlanc"
    document.querySelector(".img3").setAttribute("src", "champ-img/leblanc.webp")
  } else if (champ2 === 19) {
    document.querySelector(".champ2 p").innerHTML = "Lissandra"
    document.querySelector(".img3").setAttribute("src", "champ-img/lissandra.webp")
  } else if (champ2 === 20) {
    document.querySelector(".champ2 p").innerHTML = "Lux"
    document.querySelector(".img3").setAttribute("src", "champ-img/lux.webp")
  } else if (champ2 === 21) {
    document.querySelector(".champ2 p").innerHTML = "Malzahar"
    document.querySelector(".img3").setAttribute("src", "champ-img/malzahar.webp")
  } else if (champ2 === 22) {
    document.querySelector(".champ2 p").innerHTML = "Neeko"
    document.querySelector(".img3").setAttribute("src", "champ-img/neeko.webp")
  } else if (champ2 === 23) {
    document.querySelector(".champ2 p").innerHTML = "Orianna"
    document.querySelector(".img3").setAttribute("src", "champ-img/orianna.webp")
  } else if (champ2 === 24) {
    document.querySelector(".champ2 p").innerHTML = "Qiyana"
    document.querySelector(".img3").setAttribute("src", "champ-img/qiyana.webp")
  } else if (champ2 === 25) {
    document.querySelector(".champ2 p").innerHTML = "Ryze"
    document.querySelector(".img3").setAttribute("src", "champ-img/ryze.webp")
  } else if (champ2 === 26) {
    document.querySelector(".champ2 p").innerHTML = "Swain"
    document.querySelector(".img3").setAttribute("src", "champ-img/swain.webp")
  } else if (champ2 === 27) {
    document.querySelector(".champ2 p").innerHTML = "Sylas"
    document.querySelector(".img3").setAttribute("src", "champ-img/sylas.webp")
  } else if (champ2 === 28) {
    document.querySelector(".champ2 p").innerHTML = "Syndra"
    document.querySelector(".img3").setAttribute("src", "champ-img/syndra.webp")
  } else if (champ2 === 29) {
    document.querySelector(".champ2 p").innerHTML = "Taliyah"
    document.querySelector(".img3").setAttribute("src", "champ-img/taliyah.webp")
  } else if (champ2 === 30) {
    document.querySelector(".champ2 p").innerHTML = "Talon"
    document.querySelector(".img3").setAttribute("src", "champ-img/talon.webp")
  } else if (champ2 === 31) {
    document.querySelector(".champ2 p").innerHTML = "Twisted Fate"
    document.querySelector(".img3").setAttribute("src", "champ-img/twisted-fate.webp")
  } else if (champ2 === 32) {
    document.querySelector(".champ2 p").innerHTML = "Veigar"
    document.querySelector(".img3").setAttribute("src", "champ-img/veigar.webp")
  } else if (champ2 === 33) {
    document.querySelector(".champ2 p").innerHTML = "Vex"
    document.querySelector(".img3").setAttribute("src", "champ-img/vex.webp")
  } else if (champ2 === 34) {
    document.querySelector(".champ2 p").innerHTML = "Viktor"
    document.querySelector(".img3").setAttribute("src", "champ-img/viktor.webp")
  } else if (champ2 === 35) {
    document.querySelector(".champ2 p").innerHTML = "Vladimir"
    document.querySelector(".img3").setAttribute("src", "champ-img/vladimir.webp")
  } else if (champ2 === 36) {
    document.querySelector(".champ2 p").innerHTML = "Xerath"
    document.querySelector(".img3").setAttribute("src", "champ-img/xerath.webp")
  } else if (champ2 === 37) {
    document.querySelector(".champ2 p").innerHTML = "Yasuo"
    document.querySelector(".img3").setAttribute("src", "champ-img/yasuo.webp")
  } else if (champ2 === 38) {
    document.querySelector(".champ2 p").innerHTML = "Yone"
    document.querySelector(".img3").setAttribute("src", "champ-img/yone.png")
  } else if (champ2 === 39) {
    document.querySelector(".champ2 p").innerHTML = "Zed"
    document.querySelector(".img3").setAttribute("src", "champ-img/zed.webp")
  } else if (champ2 === 40) {
    document.querySelector(".champ2 p").innerHTML = "Zoe"
    document.querySelector(".img3").setAttribute("src", "champ-img/zoe.webp")
  }
} else if (lane === 4) {
  document.querySelector(".lane p").innerHTML = "ADC"
  document.querySelector(".img1").setAttribute("src", "lane-img/adc.jpg")
  var champ1 = Math.floor(Math.random() * 22) + 1
  var champ2 = Math.floor(Math.random() * 22) + 1
  if (champ1 === 1) {
    document.querySelector(".champ1 p").innerHTML = "Aphelios"
    document.querySelector(".img2").setAttribute("src", "champ-img/aphelios.webp")
  } else if (champ1 === 2) {
    document.querySelector(".champ1 p").innerHTML = "Ashe"
    document.querySelector(".img2").setAttribute("src", "champ-img/ashe.webp")
  } else if (champ1 === 3) {
    document.querySelector(".champ1 p").innerHTML = "Caitlyn"
    document.querySelector(".img2").setAttribute("src", "champ-img/caitlyn.webp")
  } else if (champ1 === 4) {
    document.querySelector(".champ1 p").innerHTML = "Draven"
    document.querySelector(".img2").setAttribute("src", "champ-img/draven.webp")
  } else if (champ1 === 5) {
    document.querySelector(".champ1 p").innerHTML = "Ezreal"
    document.querySelector(".img2").setAttribute("src", "champ-img/ezreal.webp")
  } else if (champ1 === 6) {
    document.querySelector(".champ1 p").innerHTML = "Jhin"
    document.querySelector(".img2").setAttribute("src", "champ-img/jhin.webp")
  } else if (champ1 === 7) {
    document.querySelector(".champ1 p").innerHTML = "Jinx"
    document.querySelector(".img2").setAttribute("src", "champ-img/jinx.webp")
  } else if (champ1 === 8) {
    document.querySelector(".champ1 p").innerHTML = "Kai'Sa"
    document.querySelector(".img2").setAttribute("src", "champ-img/kaisa.webp")
  } else if (champ1 === 9) {
    document.querySelector(".champ1 p").innerHTML = "Kalista"
    document.querySelector(".img2").setAttribute("src", "champ-img/kalista.webp")
  } else if (champ1 === 10) {
    document.querySelector(".champ1 p").innerHTML = "Kog'Maw"
    document.querySelector(".img2").setAttribute("src", "champ-img/kogmaw.webp")
  } else if (champ1 === 11) {
    document.querySelector(".champ1 p").innerHTML = "Lucian"
    document.querySelector(".img2").setAttribute("src", "champ-img/lucian.webp")
  } else if (champ1 === 12) {
    document.querySelector(".champ1 p").innerHTML = "Miss Fortune"
    document.querySelector(".img2").setAttribute("src", "champ-img/miss-fortune.webp")
  } else if (champ1 === 13) {
    document.querySelector(".champ1 p").innerHTML = "Samira"
    document.querySelector(".img2").setAttribute("src", "champ-img/samira.png")
  } else if (champ1 === 14) {
    document.querySelector(".champ1 p").innerHTML = "Sivir"
    document.querySelector(".img2").setAttribute("src", "champ-img/sivir.webp")
  } else if (champ1 === 15) {
    document.querySelector(".champ1 p").innerHTML = "Tristana"
    document.querySelector(".img2").setAttribute("src", "champ-img/tristana.webp")
  } else if (champ1 === 16) {
    document.querySelector(".champ1 p").innerHTML = "Twitch"
    document.querySelector(".img2").setAttribute("src", "champ-img/twitch.webp")
  } else if (champ1 === 17) {
    document.querySelector(".champ1 p").innerHTML = "Varus"
    document.querySelector(".img2").setAttribute("src", "champ-img/varus.webp")
  } else if (champ1 === 18) {
    document.querySelector(".champ1 p").innerHTML = "Vayne"
    document.querySelector(".img2").setAttribute("src", "champ-img/vayne.webp")
  } else if (champ1 === 19) {
    document.querySelector(".champ1 p").innerHTML = "Xayah"
    document.querySelector(".img2").setAttribute("src", "champ-img/xayah.webp")
  } else if (champ1 === 20) {
    document.querySelector(".champ1 p").innerHTML = "Yasuo"
    document.querySelector(".img2").setAttribute("src", "champ-img/yasuo.webp")
  } else if (champ1 === 21) {
    document.querySelector(".champ1 p").innerHTML = "Zeri"
    document.querySelector(".img2").setAttribute("src", "champ-img/zeri.png")
  } else if (champ1 === 22) {
    document.querySelector(".champ1 p").innerHTML = "Ziggs"
    document.querySelector(".img2").setAttribute("src", "champ-img/ziggs.png")
  }
  if (champ2 === 1) {
    document.querySelector(".champ2 p").innerHTML = "Aphelios"
    document.querySelector(".img3").setAttribute("src", "champ-img/aphelios.webp")
  } else if (champ2 === 2) {
    document.querySelector(".champ2 p").innerHTML = "Ashe"
    document.querySelector(".img3").setAttribute("src", "champ-img/ashe.webp")
  } else if (champ2 === 3) {
    document.querySelector(".champ2 p").innerHTML = "Caitlyn"
    document.querySelector(".img3").setAttribute("src", "champ-img/caitlyn.webp")
  } else if (champ2 === 4) {
    document.querySelector(".champ2 p").innerHTML = "Draven"
    document.querySelector(".img3").setAttribute("src", "champ-img/draven.webp")
  } else if (champ2 === 5) {
    document.querySelector(".champ2 p").innerHTML = "Ezreal"
    document.querySelector(".img3").setAttribute("src", "champ-img/ezreal.webp")
  } else if (champ2 === 6) {
    document.querySelector(".champ2 p").innerHTML = "Jhin"
    document.querySelector(".img3").setAttribute("src", "champ-img/jhin.webp")
  } else if (champ2 === 7) {
    document.querySelector(".champ2 p").innerHTML = "Jinx"
    document.querySelector(".img3").setAttribute("src", "champ-img/jinx.webp")
  } else if (champ2 === 8) {
    document.querySelector(".champ2 p").innerHTML = "Kai'Sa"
    document.querySelector(".img3").setAttribute("src", "champ-img/kaisa.webp")
  } else if (champ2 === 9) {
    document.querySelector(".champ2 p").innerHTML = "Kalista"
    document.querySelector(".img3").setAttribute("src", "champ-img/kalista.webp")
  } else if (champ2 === 10) {
    document.querySelector(".champ2 p").innerHTML = "Kog'Maw"
    document.querySelector(".img3").setAttribute("src", "champ-img/kogmaw.webp")
  } else if (champ2 === 11) {
    document.querySelector(".champ2 p").innerHTML = "Lucian"
    document.querySelector(".img3").setAttribute("src", "champ-img/lucian.webp")
  } else if (champ2 === 12) {
    document.querySelector(".champ2 p").innerHTML = "Miss Fortune"
    document.querySelector(".img3").setAttribute("src", "champ-img/miss-fortune.webp")
  } else if (champ2 === 13) {
    document.querySelector(".champ2 p").innerHTML = "Samira"
    document.querySelector(".img3").setAttribute("src", "champ-img/samira.png")
  } else if (champ2 === 14) {
    document.querySelector(".champ2 p").innerHTML = "Sivir"
    document.querySelector(".img3").setAttribute("src", "champ-img/sivir.webp")
  } else if (champ2 === 15) {
    document.querySelector(".champ2 p").innerHTML = "Tristana"
    document.querySelector(".img3").setAttribute("src", "champ-img/tristana.webp")
  } else if (champ2 === 16) {
    document.querySelector(".champ2 p").innerHTML = "Twitch"
    document.querySelector(".img3").setAttribute("src", "champ-img/twitch.webp")
  } else if (champ2 === 17) {
    document.querySelector(".champ2 p").innerHTML = "Varus"
    document.querySelector(".img3").setAttribute("src", "champ-img/varus.webp")
  } else if (champ2 === 18) {
    document.querySelector(".champ2 p").innerHTML = "Vayne"
    document.querySelector(".img3").setAttribute("src", "champ-img/vayne.webp")
  } else if (champ2 === 19) {
    document.querySelector(".champ2 p").innerHTML = "Xayah"
    document.querySelector(".img3").setAttribute("src", "champ-img/xayah.webp")
  } else if (champ2 === 20) {
    document.querySelector(".champ2 p").innerHTML = "Yasuo"
    document.querySelector(".img3").setAttribute("src", "champ-img/yasuo.webp")
  } else if (champ2 === 21) {
    document.querySelector(".champ2 p").innerHTML = "Zeri"
    document.querySelector(".img3").setAttribute("src", "champ-img/zeri.png")
  } else if (champ2 === 22) {
    document.querySelector(".champ2 p").innerHTML = "Ziggs"
    document.querySelector(".img3").setAttribute("src", "champ-img/ziggs.png")
  }
} else {
  document.querySelector(".lane p").innerHTML = "Support"
  document.querySelector(".img1").setAttribute("src", "lane-img/support.jpg")
  var champ1 = Math.floor(Math.random() * 32) + 1
  var champ2 = Math.floor(Math.random() * 32) + 1
  if (champ1 === 1) {
    document.querySelector(".champ1 p").innerHTML = "Alistar"
    document.querySelector(".img2").setAttribute("src", "champ-img/alistar.webp")
  } else if (champ1 === 2) {
    document.querySelector(".champ1 p").innerHTML = "Ashe"
    document.querySelector(".img2").setAttribute("src", "champ-img/ashe.webp")
  } else if (champ1 === 3) {
    document.querySelector(".champ1 p").innerHTML = "Bard"
    document.querySelector(".img2").setAttribute("src", "champ-img/bard.webp")
  } else if (champ1 === 4) {
    document.querySelector(".champ1 p").innerHTML = "Blitzcrank"
    document.querySelector(".img2").setAttribute("src", "champ-img/blitzcrank.webp")
  } else if (champ1 === 5) {
    document.querySelector(".champ1 p").innerHTML = "Brand"
    document.querySelector(".img2").setAttribute("src", "champ-img/brand.webp")
  } else if (champ1 === 6) {
    document.querySelector(".champ1 p").innerHTML = "Braum"
    document.querySelector(".img2").setAttribute("src", "champ-img/braum.webp")
  } else if (champ1 === 7) {
    document.querySelector(".champ1 p").innerHTML = "Janna"
    document.querySelector(".img2").setAttribute("src", "champ-img/janna.webp")
  } else if (champ1 === 8) {
    document.querySelector(".champ1 p").innerHTML = "Karma"
    document.querySelector(".img2").setAttribute("src", "champ-img/karma.webp")
  } else if (champ1 === 9) {
    document.querySelector(".champ1 p").innerHTML = "Leona"
    document.querySelector(".img2").setAttribute("src", "champ-img/leona.webp")
  } else if (champ1 === 10) {
    document.querySelector(".champ1 p").innerHTML = "Lulu"
    document.querySelector(".img2").setAttribute("src", "champ-img/lulu.webp")
  } else if (champ1 === 11) {
    document.querySelector(".champ1 p").innerHTML = "Lux"
    document.querySelector(".img2").setAttribute("src", "champ-img/lux.webp")
  } else if (champ1 === 12) {
    document.querySelector(".champ1 p").innerHTML = "Maokai"
    document.querySelector(".img2").setAttribute("src", "champ-img/maokai.webp")
  } else if (champ1 === 13) {
    document.querySelector(".champ1 p").innerHTML = "Morgana"
    document.querySelector(".img2").setAttribute("src", "champ-img/morgana.webp")
  } else if (champ1 === 14) {
    document.querySelector(".champ1 p").innerHTML = "Nami"
    document.querySelector(".img2").setAttribute("src", "champ-img/nami.webp")
  } else if (champ1 === 15) {
    document.querySelector(".champ1 p").innerHTML = "Nautilus"
    document.querySelector(".img2").setAttribute("src", "champ-img/nautilus.webp")
  } else if (champ1 === 16) {
    document.querySelector(".champ1 p").innerHTML = "Pantheon"
    document.querySelector(".img2").setAttribute("src", "champ-img/pantheon.webp")
  } else if (champ1 === 17) {
    document.querySelector(".champ1 p").innerHTML = "Pyke"
    document.querySelector(".img2").setAttribute("src", "champ-img/pyke.webp")
  } else if (champ1 === 18) {
    document.querySelector(".champ1 p").innerHTML = "Rakan"
    document.querySelector(".img2").setAttribute("src", "champ-img/rakan.webp")
  } else if (champ1 === 19) {
    document.querySelector(".champ1 p").innerHTML = "Rell"
    document.querySelector(".img2").setAttribute("src", "champ-img/rell.webp")
  } else if (champ1 === 20) {
    document.querySelector(".champ1 p").innerHTML = "Renata Glasc"
    document.querySelector(".img2").setAttribute("src", "champ-img/renata.webp")
  } else if (champ1 === 21) {
    document.querySelector(".champ1 p").innerHTML = "Senna"
    document.querySelector(".img2").setAttribute("src", "champ-img/senna.webp")
  } else if (champ1 === 22) {
    document.querySelector(".champ1 p").innerHTML = "Seraphine"
    document.querySelector(".img2").setAttribute("src", "champ-img/seraphine.png")
  } else if (champ1 === 23) {
    document.querySelector(".champ1 p").innerHTML = "Sona"
    document.querySelector(".img2").setAttribute("src", "champ-img/sona.webp")
  } else if (champ1 === 24) {
    document.querySelector(".champ1 p").innerHTML = "Soraka"
    document.querySelector(".img2").setAttribute("src", "champ-img/soraka.webp")
  } else if (champ1 === 25) {
    document.querySelector(".champ1 p").innerHTML = "Swain"
    document.querySelector(".img2").setAttribute("src", "champ-img/swain.webp")
  } else if (champ1 === 26) {
    document.querySelector(".champ1 p").innerHTML = "Taric"
    document.querySelector(".img2").setAttribute("src", "champ-img/taric.webp")
  } else if (champ1 === 27) {
    document.querySelector(".champ1 p").innerHTML = "Thresh"
    document.querySelector(".img2").setAttribute("src", "champ-img/thresh.webp")
  } else if (champ1 === 28) {
    document.querySelector(".champ1 p").innerHTML = "Vel'Koz"
    document.querySelector(".img2").setAttribute("src", "champ-img/vel-koz.webp")
  } else if (champ1 === 29) {
    document.querySelector(".champ1 p").innerHTML = "Xerath"
    document.querySelector(".img2").setAttribute("src", "champ-img/xerath.webp")
  } else if (champ1 === 30) {
    document.querySelector(".champ1 p").innerHTML = "Yuumi"
    document.querySelector(".img2").setAttribute("src", "champ-img/yuumi.webp")
  } else if (champ1 === 31) {
    document.querySelector(".champ1 p").innerHTML = "Zilean"
    document.querySelector(".img2").setAttribute("src", "champ-img/zilean.webp")
  } else if (champ1 === 32) {
    document.querySelector(".champ1 p").innerHTML = "Zyra"
    document.querySelector(".img2").setAttribute("src", "champ-img/zyra.webp")
  }
  if (champ2 === 1) {
    document.querySelector(".champ2 p").innerHTML = "Alistar"
    document.querySelector(".img3").setAttribute("src", "champ-img/alistar.webp")
  } else if (champ2 === 2) {
    document.querySelector(".champ2 p").innerHTML = "Ashe"
    document.querySelector(".img3").setAttribute("src", "champ-img/ashe.webp")
  } else if (champ2 === 3) {
    document.querySelector(".champ2 p").innerHTML = "Bard"
    document.querySelector(".img3").setAttribute("src", "champ-img/bard.webp")
  } else if (champ2 === 4) {
    document.querySelector(".champ2 p").innerHTML = "Blitzcrank"
    document.querySelector(".img3").setAttribute("src", "champ-img/blitzcrank.webp")
  } else if (champ2 === 5) {
    document.querySelector(".champ2 p").innerHTML = "Brand"
    document.querySelector(".img3").setAttribute("src", "champ-img/brand.webp")
  } else if (champ2 === 6) {
    document.querySelector(".champ2 p").innerHTML = "Braum"
    document.querySelector(".img3").setAttribute("src", "champ-img/braum.webp")
  } else if (champ2 === 7) {
    document.querySelector(".champ2 p").innerHTML = "Janna"
    document.querySelector(".img3").setAttribute("src", "champ-img/janna.webp")
  } else if (champ2 === 8) {
    document.querySelector(".champ2 p").innerHTML = "Karma"
    document.querySelector(".img3").setAttribute("src", "champ-img/karma.webp")
  } else if (champ2 === 9) {
    document.querySelector(".champ2 p").innerHTML = "Leona"
    document.querySelector(".img3").setAttribute("src", "champ-img/leona.webp")
  } else if (champ2 === 10) {
    document.querySelector(".champ2 p").innerHTML = "Lulu"
    document.querySelector(".img3").setAttribute("src", "champ-img/lulu.webp")
  } else if (champ2 === 11) {
    document.querySelector(".champ2 p").innerHTML = "Lux"
    document.querySelector(".img3").setAttribute("src", "champ-img/lux.webp")
  } else if (champ2 === 12) {
    document.querySelector(".champ2 p").innerHTML = "Maokai"
    document.querySelector(".img3").setAttribute("src", "champ-img/maokai.webp")
  } else if (champ2 === 13) {
    document.querySelector(".champ2 p").innerHTML = "Morgana"
    document.querySelector(".img3").setAttribute("src", "champ-img/morgana.webp")
  } else if (champ2 === 14) {
    document.querySelector(".champ2 p").innerHTML = "Nami"
    document.querySelector(".img3").setAttribute("src", "champ-img/nami.webp")
  } else if (champ2 === 15) {
    document.querySelector(".champ2 p").innerHTML = "Nautilus"
    document.querySelector(".img3").setAttribute("src", "champ-img/nautilus.webp")
  } else if (champ2 === 16) {
    document.querySelector(".champ2 p").innerHTML = "Pantheon"
    document.querySelector(".img3").setAttribute("src", "champ-img/pantheon.webp")
  } else if (champ2 === 17) {
    document.querySelector(".champ2 p").innerHTML = "Pyke"
    document.querySelector(".img3").setAttribute("src", "champ-img/pyke.webp")
  } else if (champ2 === 18) {
    document.querySelector(".champ2 p").innerHTML = "Rakan"
    document.querySelector(".img3").setAttribute("src", "champ-img/rakan.webp")
  } else if (champ2 === 19) {
    document.querySelector(".champ2 p").innerHTML = "Rell"
    document.querySelector(".img3").setAttribute("src", "champ-img/rell.webp")
  } else if (champ2 === 20) {
    document.querySelector(".champ2 p").innerHTML = "Renata Glasc"
    document.querySelector(".img3").setAttribute("src", "champ-img/renata.webp")
  } else if (champ2 === 21) {
    document.querySelector(".champ2 p").innerHTML = "Senna"
    document.querySelector(".img3").setAttribute("src", "champ-img/senna.webp")
  } else if (champ2 === 22) {
    document.querySelector(".champ2 p").innerHTML = "Seraphine"
    document.querySelector(".img3").setAttribute("src", "champ-img/seraphine.png")
  } else if (champ2 === 23) {
    document.querySelector(".champ2 p").innerHTML = "Sona"
    document.querySelector(".img3").setAttribute("src", "champ-img/sona.webp")
  } else if (champ2 === 24) {
    document.querySelector(".champ2 p").innerHTML = "Soraka"
    document.querySelector(".img3").setAttribute("src", "champ-img/soraka.webp")
  } else if (champ2 === 25) {
    document.querySelector(".champ2 p").innerHTML = "Swain"
    document.querySelector(".img3").setAttribute("src", "champ-img/swain.webp")
  } else if (champ2 === 26) {
    document.querySelector(".champ2 p").innerHTML = "Taric"
    document.querySelector(".img3").setAttribute("src", "champ-img/taric.webp")
  } else if (champ2 === 27) {
    document.querySelector(".champ2 p").innerHTML = "Thresh"
    document.querySelector(".img3").setAttribute("src", "champ-img/thresh.webp")
  } else if (champ2 === 28) {
    document.querySelector(".champ2 p").innerHTML = "Vel'Koz"
    document.querySelector(".img3").setAttribute("src", "champ-img/vel-koz.webp")
  } else if (champ2 === 29) {
    document.querySelector(".champ2 p").innerHTML = "Xerath"
    document.querySelector(".img3").setAttribute("src", "champ-img/xerath.webp")
  } else if (champ2 === 30) {
    document.querySelector(".champ2 p").innerHTML = "Yuumi"
    document.querySelector(".img3").setAttribute("src", "champ-img/yuumi.webp")
  } else if (champ2 === 31) {
    document.querySelector(".champ2 p").innerHTML = "Zilean"
    document.querySelector(".img3").setAttribute("src", "champ-img/zilean.webp")
  } else if (champ2 === 32) {
    document.querySelector(".champ2 p").innerHTML = "Zyra"
    document.querySelector(".img3").setAttribute("src", "champ-img/zyra.webp")
  }
}
