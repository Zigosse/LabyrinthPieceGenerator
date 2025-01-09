const tresorsURL = ["./ressources/images/Tresors/0.png", 
                    "./ressources/images/Tresors/1.png", 
                    "./ressources/images/Tresors/2.png", 
                    "./ressources/images/Tresors/3.png", 
                    "./ressources/images/Tresors/4.png", 
                    "./ressources/images/Tresors/5.png", 
                    "./ressources/images/Tresors/6.png", 
                    "./ressources/images/Tresors/7.png", 
                    "./ressources/images/Tresors/8.png", 
                    "./ressources/images/Tresors/9.png", 
                    "./ressources/images/Tresors/10.png", 
                    "./ressources/images/Tresors/11.png", 
                    "./ressources/images/Tresors/12.png", 
                    "./ressources/images/Tresors/13.png", 
                    "./ressources/images/Tresors/14.png", 
                    "./ressources/images/Tresors/15.png", 
                    "./ressources/images/Tresors/16.png", 
                    "./ressources/images/Tresors/17.png", 
                    "./ressources/images/Tresors/18.png", 
                    "./ressources/images/Tresors/19.png", 
                    "./ressources/images/Tresors/20.png", 
                    "./ressources/images/Tresors/21.png", 
                    "./ressources/images/Tresors/22.png", 
                    "./ressources/images/Tresors/23.png", 
                    "./ressources/images/Tresors/24.png",]

let piece = null;

//------------------------------------------------------------------------------------------------

function genForme() {
    let rng = Math.round(Math.random() * 2);
    switch (rng) {
        case 0 : return 'I';
        case 1 : return 'T';
        case 2 : return 'L';
        default : return 'erreur';
    }
}

function genSens() {
    let angle = Math.round(Math.random() * 3) * 90;
    return angle;
}

function genAmovible() {
    let rng = Math.round(Math.random());
    switch (rng) {
        case 0 : return false;
        case 1 : return true;
        default : return 'erreur';
    }
}

function genTresor() {
    let index = Math.ceil(Math.random() * 24) * Math.round(Math.random());
    return index;
}

function genPion() {
    let rng = Math.round(Math.random() * 4);
    switch (rng) {
        case 0 : return false;
        case 1 : return 'rouge';
        case 2 : return 'vert';
        case 3 : return 'bleu';
        case 4 : return 'jaune';
        default : return 'erreur';
    }
}

function genPiece(){
    return {forme: genForme(),
            sens: genSens(), 
            amovible: genAmovible(),
            tresor: genTresor(),
            pion: genPion()
            };
}

function renderPiece(objPiece) {
    let tresorImageURL = tresorsURL[objPiece.tresor];
    let forme = document.getElementById("piece");
    let tresor = document.getElementById("tresor");
    
    switch (objPiece.forme) {
        case 'I' : forme.src = "./ressources/images/Pieces/I.png";
        break;
        case 'T' : forme.src = "./ressources/images/Pieces/T.png";
        break;
        case 'L' : forme.src = "./ressources/images/Pieces/L.png";
        break;
        default : forme.src = "./ressources/images/Pieces/null.png";
    }

    forme.style.transform = `rotate(${objPiece.sens}deg)`;
    tresor.src = tresorImageURL;
    tresor.style.transform = `rotate(${objPiece.sens}deg)`;
}

function rotatePiece() {
    if (piece != null) {
        let angle = piece.sens;
        angle < 270 ? angle += 90 : angle = 0;
        piece.sens = angle;
        renderPiece(piece);
    }
}

//------------------------------------------------------------------------------------------

document.getElementById("generate").onclick = () => {
    piece = genPiece();
    console.log(piece);
    renderPiece(piece);
}

document.getElementById("rotate").onclick = () => rotatePiece();