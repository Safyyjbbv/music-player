// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.6, text: "All your insecurities" },
            { time: 27.3, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71, text: "Don't need apologies" },
            { time: 74.9, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 141, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 100000, text: "You know you want me" },
            { time: 1000, text: "So don't keep sayin' our hands are tied" },
            { time: 1000, text: "You claim it's not in the cards" },
            { time: 1000, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 1000, text: "But you're here in my heart" },
            { time: 1000, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 1000, text: "What if we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "Nothin' could keep us apart" },
            { time: 1000, text: "You'd be the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one can say what we get to be" },
            { time: 1000, text: "So why don't we rewrite the stars?" },
            { time: 1000, text: "Maybe the world could be ours tonight" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You think it's easy" },
            { time: 1000, text: "You think I don't wanna run to you, yeah" },
            { time: 1000, text: "But there are mountains (There are mountains)" },
            { time: 1000, text: "And there are doors that we can't walk through" },
            { time: 1000, text: "I know you're wonderin' why" },
            { time: 1000, text: "Because we're able to be just you and me within these walls" },
            { time: 1000, text: "But when we go outside" },
            { time: 1000, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 1000, text: "No one can rewrite the stars" },
            { time: 1000, text: "How can you say you'll be mine?" },
            { time: 1000, text: "Everything keeps us apart" },
            { time: 1000, text: "And I'm not the one you were meant to find" },
            { time: 1000, text: "It's not up to you, it's not up to me" },
            { time: 1000, text: "When everyone tells us what we can be" },
            { time: 1000, text: "And how can we rewrite the stars?" },
            { time: 1000, text: "Say that the world can be ours tonight" },
            { time: 1000, text: "All I want is to fly with you" },
            { time: 1000, text: "All I want is to fall with you" },
            { time: 1000, text: "So just give me all of you" },
            { time: 1000, text: "It feels impossible" },
            { time: 1000, text: "It's not impossible" },
            { time: 1000, text: "Is it impossible?" },
            { time: 1000, text: "Say that it's possible" },
            { time: 1000, text: "How do we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "And nothin' could keep us apart" },
            { time: 1000, text: "'Cause you are the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one could say what we get to be" },
            { time: 1000, text: "And why don't we rewrite the stars?" },
            { time: 1000, text: "Changin' the world to be ours" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 1000, text: "But I can't have you" },
            { time: 1000, text: "We're bound to break and my hands are tied" }
        ]
    },
    {
        id: 5,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "audio/Somebodys Pleasure.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 1000, text: "I've been too busy ignoring and hiding" },
            { time: 1000, text: "About what my heart actually say" },
            { time: 1000, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 1000, text: "Sometimes a happiness is just a happiness" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I always pretending and lying" },
            { time: 1000, text: "I got used to feel empty" },
            { time: 1000, text: "'Cause all I got is unhappy" },
            { time: 1000, text: "Happiness, can't I get happiness?" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "And I don't even feel my own pain" },
            { time: 1000, text: "Whatever when the storms pouring rain" },
            { time: 1000, text: "Feels like a wind" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I hold imagination" },
            { time: 1000, text: "Cover all of the sadness" },
            { time: 1000, text: "I don't feel something special" },
            { time: 1000, text: "Turn off the phone to get some spatial" },
            { time: 1000, text: "Never thought I'd living in true" },
            { time: 1000, text: "The truth that has been so blue" },
            { time: 1000, text: "It was in a blink of an eye" },
            { time: 1000, text: "Find a way how to say goodbye" },
            { time: 1000, text: "I've got to take me away from all sadness" },
            { time: 1000, text: "Stitch all my wounds, confess all the sins" },
            { time: 1000, text: "And took all my insecurities" },
            { time: 1000, text: "When will I got the love that is so pure?" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 1000, text: "Gotta have, gotta have to always make sure" },
            { time: 1000, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 1000, text: "I wanna be your vacuum cleaner" },
            { time: 1000, text: "Breathing in your dust" },
            { time: 1000, text: "I wanna be your Ford Cortina" },
            { time: 1000, text: "I will never rust" },
            { time: 1000, text: "If you like your coffee hot" },
            { time: 1000, text: "Let me be your coffee pot" },
            { time: 1000, text: "You call the shots, babe" },
            { time: 1000, text: "I just wanna be yours" },
            
            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 1000, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 1000, text: "Let me be the portable heater that you'll get cold without" },
            { time: 1000, text: "I wanna be your setting lotion (wanna be)" },
            { time: 1000, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 1000, text: "At least as deep as the Pacific Ocean" },
            { time: 1000, text: "I wanna be yours" },

            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours" },

            { time: 1000, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 1000, text: "Breathing in your dust (Wanna be yours)" },
            { time: 1000, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 1000, text: "I will never rust (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
{
  id: 7,
  title: "Lovely",
  artist: "Billie Eilish & Khalid",
  album: "Single",
  albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtrXTHVxsDrR8vxIN3hga9h4QzotX-4LrYg&s",
  audioSrc: "audio/lovely.mp3",
  videoBgSrc: "videos/lovely_bg.mp4",
  lyrics: [
  { time: 20.92, text: "Thought I found a way" },
  { time: 24.88, text: "Thought I found a way out (found)" },
  { time: 28.57, text: "But you never go away (never go away)" },
  { time: 32.80, text: "So I guess I gotta stay now" },

  { time: 35.89, text: "Oh, I hope some day I'll make it out of here" },
  { time: 44.27, text: "Even if it takes all night or a hundred years" },
  { time: 52.61, text: "Need a place to hide, but I can't find one near" },
  { time: 60.99, text: "Wanna feel alive, outside I can't fight my fear" },

  { time: 70.81, text: "Isn't it lovely, all alone" },
  { time: 75.02, text: "Heart made of glass, my mind of stone" },
  { time: 79.22, text: "Tear me to pieces, skin to bone" },
  { time: 83.95, text: "Hello, welcome home" },

  { time: 91.74, text: "Walkin' out of town" },
  { time: 95.92, text: "Lookin' for a better place (lookin' for a better place)" },
  { time: 100.12, text: "Something's on my mind (mind)" },
  { time: 104.37, text: "Always in my head space" },

  { time: 106.86, text: "But I know some day I'll make it out of here" },
  { time: 115.27, text: "Even if it takes all night or a hundred years" },
  { time: 123.49, text: "Need a place to hide, but I can't find one near" },
  { time: 131.90, text: "Wanna feel alive, outside I can't fight my fear" },

  { time: 141.85, text: "Isn't it lovely, all alone" },
  { time: 146.27, text: "Heart made of glass, my mind of stone" },
  { time: 150.10, text: "Tear me to pieces, skin to bone" },
  { time: 154.80, text: "Hello, welcome home" },

  { time: 160.60, text: "Whoa, yeah" },
  { time: 166.91, text: "Yeah, ah" },
  { time: 173.96, text: "Whoa, whoa" },
  { time: 188.16, text: "Hello, welcome home" }
]
},

{
  id: 8,
  title: "ingin memeluk dirimu",
  artist: "dorman manik",
  album: "Ingin Memeluk Dirimu",
  albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCj7Wdq365LLSLFVC28o3dZvwhfh28rwV-KvfcQKmBVw&s",
  audioSrc: "audio/Ingin-Memeluk-Dirimu.mp3",
  videoBgSrc: "videos/ingin-memeluk-dirimu.mp4",
  lyrics: [
  { time: 29.28, text: "Baru pertama aku merasakan" },
  { time: 35.76, text: "Serba salah bila di depan dirimu" },
  { time: 43.13, text: "Entah mengapa aku begini" },
  { time: 50.14, text: "Wajahmu s'lalu terbayang-bayang" },
  { time: 60.28, text: "Sehari saja kita tak bertemu" },
  { time: 66.55, text: "Gelisah hatiku, ingin jumpa kamu" },
  { time: 74.25, text: "Kerinduanku semakin mendalam" },
  { time: 80.97, text: "Cintaku padamu s'makin membara" },
  { time: 90.83, text: "Bila malam, kupeluk bayang dirimu" },
  { time: 97.61, text: "Dalam tidur pun kau s'lalu kuimpikan" },
  { time: 104.52, text: "Aku takut berteriak memanggilmu" },
  { time: 111.44, text: "Di tengah malam sunyi, ku sendiri" },
  { time: 119.66, text: "Ingin memeluk dirimu" },
  { time: 124.80, text: "" },

  { time: 135.52, text: "Sehari saja kita tak bertemu" },
  { time: 141.82, text: "Gelisah hatiku, ingin jumpa kamu" },
  { time: 149.63, text: "Kerinduanku semakin mendalam" },
  { time: 156.22, text: "Cintaku padamu s'makin membara" },
  { time: 166.17, text: "Bila malam, kupeluk bayang dirimu" },
  { time: 173.02, text: "Dalam tidur pun kau s'lalu kuimpikan, oh-ho" },
  { time: 179.94, text: "Aku takut berteriak memanggilmu" },
  { time: 187.23, text: "Di tengah malam sunyi, ku sendiri" },
  { time: 193.59, text: "Oh-oh-ho-oh-oh-ho" },
  { time: 199.33, text: "" },

  { time: 221.26, text: "Bila malam, kupeluk bayang dirimu" },
  { time: 227.59, text: "Dalam tidur pun kau s'lalu kuimpikan, oh-ho" },
  { time: 234.75, text: "Aku takut berteriak memanggilmu" },
  { time: 241.89, text: "Di tengah malam sunyi, ku sendiri" },
  { time: 249.97, text: "Ingin memeluk dirimu" },
  { time: 255.98, text: "" }
]
},

{
  id: 9,
  title: "Lesung Pipi",
  artist: "Raim Loade",
  album: " Lesung Pipi (Acoustic Version)",
  albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVolHQUVSoa009vmEDw46_S6K55WYAHD56OMRebNA6Zg&s",
  audioSrc: "audio/Lesung Pipi.mp3",
  videoBgSrc: "videos/lesung pipi.mp4",
  lyrics: [
  { time: 14.78, text: "Tatkala mentari" },
  { time: 18.38, text: "Terbenang di ufuk barat" },
  { time: 21.81, text: "Disaat itulah" },
  { time: 25.40, text: "Dingin rindu selimuti" },
  { time: 29.16, text: "Keindahan senyuman dari lesung pipi itu" },
  { time: 36.03, text: "Menikmati imaji bersamamu" },
  { time: 43.64, text: "" },

  { time: 46.56, text: "Maka terimalah diriku" },
  { time: 53.63, text: "Kita akan bahagia selamanya" },
  { time: 60.75, text: "Kuberjanji jadi suamimu" },
  { time: 67.73, text: "Dan ku akan memberikan yang terbaik untukmu" },
  { time: 76.65, text: "" },

  { time: 84.92, text: "Ku sadar lirikku" },
  { time: 88.32, text: "Tak seindah lagu indie" },
  { time: 92.05, text: "Yang slalu kau dengar" },
  { time: 95.62, text: "Meracuni telingamu" },
  { time: 99.14, text: "Kupastikan ini bukan tentang senja dan lara" },
  { time: 106.21, text: "Sahajamu warnai duniaku..." },
  { time: 117.60, text: "Maka terimalah diriku" },
  { time: 125.74, text: "Kita akan bahagia selamanya" },
  { time: 132.78, text: "Kuberjanji jadi suamimu" },
  { time: 139.77, text: "Dan ku akan memberikan yang terbaik untukmu" },
  { time: 148.73, text: "Perbedaan buat kita terus bersama" },
  { time: 156.16, text: "Izinkan ku jaga hatimu...." },
  { time: 166.49, text: "" },

  { time: 175.93, text: "Maka terimalah diriku" },
  { time: 184.20, text: "Kita akan bahagia selamanya" },
  { time: 191.29, text: "Kuberjanji jadi suamimu" },
  { time: 198.28, text: "Dan ku akan memberikan yang terbaik untukmu" },
  { time: 205.38, text: "Karena itu tugas cinta memberikan keindahan" },
  { time: 212.42, text: "Meskipun hidup tak selalu indah" },
  { time: 219.47, text: "Meskipun hidup tak selalu indah" }
]
},

{
  id: 10,
  title: "Counting Stars",
  artist: "OneRepublic",
  album: "Native",
  albumArtUrl: "data:image/jpeg;base64,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",
  audioSrc: "audio/counting-stars.mp3",
  videoBgSrc: "videos/counting-stars.mp4",
  lyrics: [
    { time: 0.00, text: "Lately I been, I been losing sleep" },
    { time: 4.51, text: "dreaming about the things that we could be" },
    { time: 8.37, text: "But baby I been, I been praying hard" },
    { time: 13.77, text: "said no more counting dollars" },
    { time: 15.51, text: "we'll be counting stars" },
    { time: 18.75, text: "Yeah, we'll be counting stars" },
    { time: 22.93, text: "(MUSIC)" },
    { time: 37.65, text: "I see this life" },
    { time: 39.09, text: "like a swinging vine" },
    { time: 40.36, text: "swing my heart across the line" },
    { time: 42.27, text: "in my faces flashing signs" },
    { time: 44.25, text: "Seek it out and you shall find" },
    { time: 46.25, text: "The old, but I'm not that old" },
    { time: 48.22, text: "Young, but I'm not that bold" },
    { time: 50.16, text: "And I don't think the world is sold" },
    { time: 52.30, text: "I'm just doing what we're told" },
    { time: 54.59, text: "I feel something so right" },
    { time: 59.02, text: "doing the wrong thing" },
    { time: 62.48, text: "I feel something so wrong" },
    { time: 66.95, text: "but doing the right thing" },
    { time: 70.15, text: "I could lie, could lie, could lie" },
    { time: 74.05, text: "Everything that kills me makes me feel alive" },
    { time: 78.05, text: "Lately I been, I been losing sleep" },
    { time: 82.09, text: "dreaming about the things that we could be" },
    { time: 85.39, text: "But baby I been, I been praying hard" },
    { time: 90.02, text: "said no more counting dollars we'll be counting stars" },
    { time: 93.37, text: "Lately I been, I been losing sleep" },
    { time: 97.51, text: "dreaming about the things that we could be" },
    { time: 100.69, text: "But baby I been, I been praying hard" },
    { time: 105.32, text: "said no more counting dollars" },
    { time: 107.11, text: "We'll be, we'll be counting stars" },
    { time: 110.41, text: "(MUSIC)" },
    { time: 116.55, text: "I feel the love" },
    { time: 117.90, text: "and I feel it burn" },
    { time: 119.13, text: "down this river every turn" },
    { time: 121.17, text: "Hope is a four letter word" },
    { time: 123.09, text: "Make that money Watch it burn" },
    { time: 125.27, text: "Old, but I'm not that old" },
    { time: 127.18, text: "Young, but I'm not that bold" },
    { time: 129.14, text: "And I don't think the world is sold" },
    { time: 131.19, text: "I'm just doing what we're told" },
    { time: 133.56, text: "I feel something so wrong" },
    { time: 137.77, text: "but doing the right thing" },
    { time: 141.15, text: "I could lie, could lie, could lie" },
    { time: 144.96, text: "Everything that downs me makes me wanna fly" },
    { time: 148.90, text: "Lately I been, I been losing sleep" },
    { time: 153.02, text: "dreaming about the things that we could be" },
    { time: 156.36, text: "But baby I been, I been praying hard" },
    { time: 160.78, text: "said no more counting dollars we'll be counting stars" },
    { time: 165.11, text: "Lately I been, I been losing sleep" },
    { time: 169.23, text: "dreaming about the things that we could be" },
    { time: 172.67, text: "But baby I been, I been praying hard" },
    { time: 176.75, text: "said no more counting dollars" },
    { time: 178.59, text: "We'll be, we'll be counting stars" },
    { time: 181.11, text: "(MUSIC)" },
    { time: 184.06, text: "Take that money and watch it burn" },
    { time: 185.96, text: "Sink in the river the lessons I learned" },
    { time: 187.95, text: "Take that money and watch it burn" },
    { time: 189.92, text: "Sink in the river the lessons I learned" },
    { time: 191.97, text: "Take that money and watch it burn" },
    { time: 193.86, text: "Sink in the river the lessons I learned" },
    { time: 195.95, text: "Take that money and watch it burn" },
    { time: 197.83, text: "Sink in the river the lessons I learned" },
    { time: 199.75, text: "Everything that kills me makes me feel alive" },
    { time: 206.82, text: "Lately I been, I been losing sleep" },
    { time: 211.00, text: "dreaming about the things that we could be" },
    { time: 214.67, text: "But baby I been, I been praying hard" },
    { time: 219.01, text: "said no more counting dollars" },
    { time: 220.81, text: "we'll be counting stars" },
    { time: 222.74, text: "Lately I been, I been losing sleep" },
    { time: 226.89, text: "dreaming about the things that we could be" },
    { time: 230.72, text: "But baby I been, I been praying hard" },
    { time: 234.77, text: "said no more counting dollars" },
    { time: 236.48, text: "We'll be, we'll be counting stars" },
    { time: 239.38, text: "Take that money and watch it burn" },
    { time: 240.83, text: "Sink in the river the lessons I learned" },
    { time: 242.77, text: "Take that money and watch it burn" },
    { time: 244.65, text: "Sink in the river the lessons I learned" },
    { time: 246.46, text: "Take that money and watch it burn" },
    { time: 248.26, text: "Sink in the river the lessons I learned" },
    { time: 250.28, text: "Take that money and watch it burn" },
    { time: 252.27, text: "Sink in the river the lessons I learned" }
  ]
},

{
  id: 11,
  title: "Take Me Home, Country Roads",
  artist: "John Denver",
  album: "Poems, Prayers & Promises",
  albumArtUrl: "data:image/jpeg;base64,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",
  audioSrc: "audio/take-me-home.mp3",
  videoBgSrc: "videos/take-me-home.mp4",
  lyrics: [
    { time: 7.23, text: "Almost heaven," },
    { time: 9.75, text: "West Virginia" },
    { time: 12.81, text: "Blue Ridge Mountains" },
    { time: 15.22, text: "Shenandoah River" },
    { time: 20.42, text: "Life is old there, older than the trees" },
    { time: 25.05, text: "Younger than the mountains, growing like a breeze" },
    { time: 30.52, text: "Country Roads, take me home" },
    { time: 35.87, text: "To the place I belong" },
    { time: 41.61, text: "West Virginia mountain Momma" },
    { time: 47.40, text: "Take me home country roads" },
    { time: 55.36, text: "All my mem'ries gather round there" },
    { time: 60.89, text: "Minder's lady stranger to blue water" },
    { time: 66.69, text: "Dark and dusty painted on the sky" },
    { time: 73.26, text: "Misty taste of moonshine," },
    { time: 76.24, text: "Tear drops in my eyes" },
    { time: 79.15, text: "Country Roads, take me home" },
    { time: 83.95, text: "To the place I belong" },
    { time: 89.65, text: "West Virginia mountain Momma" },
    { time: 95.49, text: "Take me home country roads" },
    { time: 99.45, text: "I hear the voice in the mornin' hours she calls me" },
    { time: 108.42, text: "The radio reminds me of my home far away" },
    { time: 114.28, text: "Driving down the road I get a feelin'" },
    { time: 118.43, text: "That I should have been home yesterday" },
    { time: 122.12, text: "Yesterday" },
    { time: 124.75, text: "Country Roads, take me home" },
    { time: 130.36, text: "To the place I belong" },
    { time: 135.57, text: "West Virginia mountain Momma" },
    { time: 141.50, text: "Take me home country roads" },
    { time: 147.78, text: "Country Roads, take me home" },
    { time: 155.92, text: "To the place I belong" },
    { time: 158.32, text: "West Virginia mountain Momma" },
    { time: 164.18, text: "Take me home country roads" },
    { time: 170.18, text: "Take me home country roads" },
    { time: 175.41, text: "Take me home country roads" }
  ]
},

{
  id: 12,
  title: "Tricks",
  artist: "Shanti Dope",
  album: "Tricks (Single)",
  albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273d50e0a2bcd15f74230d210ff",
  audioSrc: "audio/tricks.mp3",
  videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
  lyrics: [
    { time: 0.05, text: "So many hoes wanna go play tricks on me (on me)" },
    { time: 9.84, text: "So many hoes wanna go play tricks on me (on me)" },
    { time: 19.02, text: "Mga batang panginoon na naglalaro lang" },
    { time: 21.34, text: "Sa bandang alapaap ang kasama ko lumutang" },
    { time: 23.70, text: "Nasabi din ng ate niya, sa katawan ko muna" },
    { time: 26.00, text: "Dadaan 'yung alak kung gusto ko rin magkainuman" },
    { time: 28.81, text: "Mga ilaw sa dilim, sa mata ko nakatingin" },
    { time: 31.02, text: "Sagot ng chickas na kanina ko pa gusto tanungin" },
    { time: 33.73, text: "Kung ano pangalan ng kasama niyang panalo rin" },
    { time: 36.09, text: "At no'ng inaya ko sumama, nabanggit niya, 'Ako din'" },
    { time: 38.68, text: "'Di niya pa 'ko kakilala, sumama siya kaagad" },
    { time: 41.27, text: "Narinig niya lang na mga kasama ko'y young god" },
    { time: 43.65, text: "Mga damit lang nila 'yung sa sahig nakakalat" },
    { time: 45.90, text: "Habang sa kama niya lang kayang hindi magpaawat" },
    { time: 48.53, text: "Halata ko na sanay na sanay siya umamat" },
    { time: 50.84, text: "Ramdam ko siya sa reyalidad niyang tinatakasan" },
    { time: 53.16, text: "Ang sabi niya sa akin, ''Di ka para sa kalsada'" },
    { time: 55.89, text: "Kahit na halata mong pinalaki ka ng gangsta" },
    { time: 58.58, text: "Parang si Rihanna, babae pero hustla'" },
    { time: 61.10, text: "Ayaw mo sa drama, gusto mo sa gangsta" },
    { time: 63.49, text: "Hindi ako gano'n pero tayo 'yung magkasama" },
    { time: 65.87, text: "Sa mga panahong wala kang katabi sa kama" },
    { time: 68.34, text: "Sa dami ng pagsubok na ayokong maalala" },
    { time: 71.09, text: "Dito muna tayo sa ngayon, ako bahala" },
    { time: 73.79, text: "Kung natatakot ka na muna magmahal, uh" },
    { time: 76.13, text: "Pareho tayo, 'wag ka mag-aalala, ha" },
    { time: 78.20, text: "Habang sa sarili lang kung sa'n ako nakadepende" },
    { time: 80.86, text: "Ang hirap maniwalang dito 'ko nakarating, yeah" },
    { time: 83.19, text: "Sa daming pinakita sa 'kin sa edad na 20" },
    { time: 85.87, text: "Ng karanasan nang sa puso ko nagpalamig" },
    { time: 88.19, text: "Sa kanya lang, basta may amat na kaya dalhin" },
    { time: 90.74, text: "May bayad o wala, gusto niya 'ko pasayahin" },
    { time: 92.80, text: "At kapag umikot paningin ko sa balakang niya 'tsaka dede" },
    { time: 95.61, text: "Mas gagalingan niya pa sumayaw para sa gang" },
    { time: 98.09, text: "May dala siyang 'di mahina, nilagay niya sa 'king dila" },
    { time: 100.51, text: "Ang tagal naman ng tama, gumagana ba 'to? 'Di nga" },
    { time: 102.92, text: "No'ng gumana, tinanong ko 'yung barkada niya, 'Balita?'" },
    { time: 105.40, text: "Sagot niya lang, 'Mas guwapo ka sa personal makita'" },
    { time: 108.03, text: "Bigla 'kong namanhid ta's wala na siyang damit" },
    { time: 110.35, text: "Hinimay 'yung malagkit, ayon, sabog kami ulit" },
    { time: 112.70, text: "Pandiinang Pilipinang mambabae din ang trip" },
    { time: 115.22, text: "O dalagitang malandi ang kahalikan niya na bitch" },
    { time: 118.02, text: "Parang si Rihanna, babae pero hustla'" },
    { time: 120.45, text: "Ayaw mo sa drama, gusto mo sa gangsta" },
    { time: 122.82, text: "Hindi ako gano'n pero tayo 'yung magkasama" },
    { time: 125.46, text: "Sa mga panahong wala kang katabi sa kama" },
    { time: 127.70, text: "Sa dami ng pagsubok na ayokong maalala" },
    { time: 130.40, text: "Dito muna tayo sa ngayon, ako bahala" },
    { time: 133.16, text: "Kung natatakot ka na muna magmahal, uh" },
    { time: 135.68, text: "Pareho tayo, 'wag ka mag-aalala, ha" },
    { time: 137.79, text: "So, so, so many hoes wanna go play tricks on me (on me)" },
    { time: 142.25, text: "You can put the blame on me (on me)" },
    { time: 144.54, text: "'Cause it feels so damn good when I make it rain" },
    { time: 147.45, text: "Yeah, I make 'em say" },
    { time: 148.44, text: "\"Oh, what a night, oh, what a night, oh, what a night\"" },
    { time: 153.34, text: "\"Oh, what a night, oh, what a night, oh, what a night\"" },
    { time: 157.79, text: "Parang si Rihanna, babae pero hustla'" },
    { time: 160.14, text: "Ayaw mo sa drama, gusto mo sa gangsta" },
    { time: 162.31, text: "Hindi ako gano'n pero tayo 'yung magkasama" },
    { time: 164.97, text: "Sa mga panahong wala kang katabi sa kama" },
    { time: 167.42, text: "Sa dami ng pagsubok na ayokong maalala" },
    { time: 170.12, text: "Dito muna tayo sa ngayon, ako bahala" },
    { time: 172.84, text: "Kung natatakot ka na muna magmahal, uh" },
    { time: 175.26, text: "Pareho tayo, 'wag ka mag-aalala, ha" }
  ]
},

{
  id: 13,
  title: "Cintamu Sepahit Topi Miring",
  artist: "Jogja Hip-Hop Foundation",
  album: "semar mesem romo mendem",
  albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273c241587a96e12beb78d5bb4f",
  audioSrc: "audio/topi-miring.mp3",
  videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
  lyrics: [
    { time: 4.47, text: "(Yen kecemplung, kadhung trima kowe nyampar nyandung)" },
    { time: 9.62, text: "Sengkuni leda-lede" },
    { time: 12.85, text: "Mimpin baris, ngarep dhewe" },
    { time: 15.48, text: "Eh, barisane menggok" },
    { time: 17.63, text: "Sengkuni kok malah ndheprok?" },
    { time: 20.69, text: "Nong eh, nong ji, nong ro" },
    { time: 23.05, text: "Nong eh, nong ji, nong ro" },
    { time: 25.66, text: "Nong eh, nong ji, nong ro" },
    { time: 28.21, text: "Nong eh, nong ji, nong ro" },
    { time: 29.88, text: "Senja di Desa Baron" },
    { time: 31.17, text: "Matahari tenggelam di dalam kemaron" },
    { time: 33.59, text: "Lembu betina lari melompat-lompat" },
    { time: 36.21, text: "Dikejar-kejar anaknya yang kecil, meloncat" },
    { time: 38.70, text: "Senja lucu dengan kasih sayang ibu dan anak" },
    { time: 41.32, text: "Langit senja mengandung sapi beranak" },
    { time: 43.09, text: "Terpesona Ranto melihat, ia tertawa bergelak" },
    { time: 46.26, text: "Dan berubah jadi Ranto Gudel, sang pelawak" },
    { time: 48.42, text: "Dadi Marmoyo, di panggung ketoprak" },
    { time: 50.93, text: "Ranto Gudel, meminum arak" },
    { time: 53.25, text: "Terendam di dalam ciu" },
    { time: 55.90, text: "Birahinya berubah jadi biru" },
    { time: 58.31, text: "Diajaknya Nyai Dasima bercinta" },
    { time: 60.64, text: "Dengan cinta sepahit topi miringnya" },
    { time: 63.00, text: "Layar dibuka, turun hujan gembukan" },
    { time: 65.94, text: "Dewi Mlenuk gembuk datang" },
    { time: 68.12, text: "Membawa seguling roti cakwe" },
    { time: 70.97, text: "Marmoyo rebah, terguling tidur" },
    { time: 73.61, text: "Di pangkuan Nyai Dasima" },
    { time: 75.73, text: "Yang sekeras ciu cangkol, buah dadanya" },
    { time: 78.62, text: "Ke mana Ranto Gudel pergi" },
    { time: 80.13, text: "Panggung selalu harum dengan arak yang wangi" },
    { time: 82.81, text: "Di Sriwedari jadi Petruk" },
    { time: 86.04, text: "Gareng-nya diajak mabuk" },
    { time: 88.38, text: "Bagong-nya menggeloyor" },
    { time: 90.80, text: "Semar jualan ciu cangkol" },
    { time: 93.28, text: "Dengan terang lampu semprong" },
    { time: 95.88, text: "Pak Mloyo memukul kenong" },
    { time: 98.05, text: "Nong ji, nong ro, nong ji, nong" },
    { time: 98.94, text: "Sengkuni leda-lede" },
    { time: 101.99, text: "Mimpin baris, ngarep dhewe" },
    { time: 104.54, text: "Eh, barisane menggok" },
    { time: 106.91, text: "Sengkuni kok malah ndheprok?" },
    { time: 109.69, text: "Nong eh, nong ji, nong ro" },
    { time: 112.25, text: "Nong eh, nong ji, nong ro" },
    { time: 114.82, text: "Nong eh, nong ji, nong ro" },
    { time: 117.12, text: "Nong eh, nong ji, nong ro" },
    { time: 119.04, text: "Giginya ompong menggerong, Ranto Gudel Mendehem nyungsep" },
    { time: 121.98, text: "Thuyul gundhul ke sana-ke sini mengempit gendul" },
    { time: 124.54, text: "Gendruwo thela-thelo, tampak loyo" },
    { time: 126.78, text: "Jrangkong jalannya miring-miring, eh, dhoyong" },
    { time: 129.24, text: "Belum selesai menabuh nong ji, nong ro" },
    { time: 131.65, text: "Pak Mloyo terguling ke Bengawan Solo" },
    { time: 134.29, text: "Dengan irama alunan nong ji, nong ro" },
    { time: 136.59, text: "Pak Mloyo pulang jalannya geloyoran" },
    { time: 138.65, text: "Sengkuni leda-lede" },
    { time: 141.54, text: "Mimpin baris, ngarep dhewe" },
    { time: 144.01, text: "Eh, barisane menggok" },
    { time: 146.23, text: "Sengkuni kok malah ndheprok?" },
    { time: 149.16, text: "Ranto Gudel meminum arak bekonang" },
    { time: 151.75, text: "Mengantar gadis pulang berdandan bidan" },
    { time: 153.76, text: "Roknya putih, bajunya putih" },
    { time: 156.00, text: "Serba putih lebih daripada peri" },
    { time: 158.86, text: "Tiba di pinggir kali" },
    { time: 159.90, text: "Ranto Gudel diajak belok ke kiri" },
    { time: 162.59, text: "Dhemit elek a'u tenan" },
    { time: 164.86, text: "Ngumpat, Ranto Gudel geram" },
    { time: 167.48, text: "Ia marah, terendam arak bekonang" },
    { time: 169.77, text: "Hampir saja aku bercinta dengan setan" },
    { time: 172.32, text: "Cinta manusia seperti Umbul Pengging" },
    { time: 174.42, text: "Dulu bening, sekarang keruh" },
    { time: 176.17, text: "Ranto Gudel dengan empat istrinya, tak pernah abadi cintanya" },
    { time: 177.96, text: "Sengkuni leda-lede" },
    { time: 181.04, text: "Mimpin baris, ngarep dhewe" },
    { time: 183.66, text: "Eh, barisane menggok" },
    { time: 185.81, text: "Sengkuni kok malah ndheprok?" },
    { time: 188.76, text: "Nong eh, nong ji, nong ro" },
    { time: 191.28, text: "Nong eh, nong ji, nong ro" },
    { time: 193.86, text: "Nong eh, nong ji, nong ro" },
    { time: 196.15, text: "Nong eh, nong ji, nong ro" },
    { time: 197.73, text: "Emang enak jadi wedhus daripada manusia" },
    { time: 200.64, text: "Bila mati, dikubur di gundukan tanah" },
    { time: 203.20, text: "Kepalanya dikencingi, wedhus yang merumput" },
    { time: 205.78, text: "Nasib manusia hanya sengsara" },
    { time: 208.24, text: "Oh, mengapa kita mesti bersusah?" },
    { time: 210.89, text: "Coba hiduplah seperti Ki Joko Lelur" },
    { time: 213.13, text: "Siangnya melamun, meminum limun" },
    { time: 215.68, text: "Malam beranjak, bangun, minum berminum" },
    { time: 217.91, text: "Lapen, ciu cangkol, arak bekonang, dituang" },
    { time: 220.66, text: "Botol cangkol dipasangnya di setiap sudut rumah" },
    { time: 223.25, text: "Apa guna 'tuk takut-takut tikus" },
    { time: 224.76, text: "Rupanya, oh, mengenang bayangan di masa tuanya" },
    { time: 227.82, text: "Ciu cangkol hanyalah spiritus 'tuk usir tikus" },
    { time: 230.35, text: "Padahal dulu ku meminumnya sampai mampus" },
    { time: 232.43, text: "Sengkuni leda-lede" },
    { time: 235.42, text: "Mimpin baris, ngarep dhewe" },
    { time: 238.04, text: "Eh, barisane menggok" },
    { time: 240.30, text: "Sengkuni kok malah ndheprok?" },
    { time: 243.30, text: "Nong eh, nong ji, nong ro" },
    { time: 245.91, text: "Nong eh, nong ji, nong ro" },
    { time: 248.32, text: "Nong eh, nong ji, nong ro" },
    { time: 250.73, text: "Nong eh, nong ji, nong ro" },
    { time: 252.39, text: "Sengkuni leda-lede" },
    { time: 255.28, text: "Mimpin baris, ngarep dhewe" },
    { time: 257.87, text: "Eh, barisane menggok" },
    { time: 260.15, text: "Sengkuni kok malah ndheprok?" },
    { time: 263.00, text: "Nong eh, nong ji, nong ro" },
    { time: 265.53, text: "Nong eh, nong ji, nong ro" },
    { time: 268.14, text: "Nong eh, nong ji, nong ro" },
    { time: 270.56, text: "Nong eh, nong ji, nong ro" }
  ]
},

];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();