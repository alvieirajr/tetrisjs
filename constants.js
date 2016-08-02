
    const DIRECTION_TO_LEFT = 4;
    const DIRECTION_TO_RIGHT = 6;
    const DIRECTION_TO_BOTTOM = 2;
    
    const delta = 15;
    const map_width_in_pieces = 15;
    const map_height_in_pieces = 30;
    const map_width_in_pixels = delta * map_width_in_pieces; 
    const map_height_in_pixels = delta * map_height_in_pieces;  

    
    const canvas = document.querySelector("canvas");
    const mapa = canvas.getContext("2d");
    const tile = canvas.getContext("2d");
    const colors = ['#FFFFFF', '#27A4DD', '#9DD5C0', '#F39CC3', '#F1646C', '#FAC174']; // Cyclemon pallete
    const background_collor = "#F5F3F2";
    const pieces_type = ['tshape', 'line', 'box', 'lshape', 'slshape', 'srshape']; //