#target photoshop

// Thanks to: https://community.adobe.com/t5/photoshop-ecosystem-discussions/action-or-script-to-eyedropper-at-the-current-mouse-position/m-p/10488140#M248348
// and https://community.adobe.com/t5/photoshop-ecosystem-discussions/selection-bounds-operation/m-p/3780772
// and https://community.adobe.com/t5/photoshop-ecosystem-discussions/how-to-i-get-the-color-value-of-a-a-particular-location-in-the-canvas-via-script/td-p/10667449
// and https://community.adobe.com/t5/photoshop-ecosystem-discussions/how-to-suppress-pop-up-message-in-photoshop-script-no-pixels-are-selected/m-p/10273191

// Suppress any pop-ups caused by selection issues
app.displayDialogs = DialogModes.NO;

var doc = activeDocument;
var curLayer = doc.activeLayer;
// This will grab the upper left pixel from the selection
var selCoords = [app.activeDocument.selection.bounds[0].as('px'),
                    app.activeDocument.selection.bounds[1].as('px')];

sampleColor (selCoords);

function sampleColor(selCoords){
    doc.colorSamplers.removeAll();
    colorS1 = doc.colorSamplers.add (selCoords);
    var c1R = colorS1.color.rgb.red
    var c1G = colorS1.color.rgb.green
    var c1B = colorS1.color.rgb.blue    
    var idsetd = charIDToTypeID( "setd" );
        var desc17 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref4 = new ActionReference();
            var idClr = charIDToTypeID( "Clr " );
            var idFrgC = charIDToTypeID( "FrgC" );
            ref4.putProperty( idClr, idFrgC );
        desc17.putReference( idnull, ref4 );
        var idT = charIDToTypeID( "T   " );
            var desc18 = new ActionDescriptor();
            var idRd = charIDToTypeID( "Rd  " );
            desc18.putDouble( idRd, c1R );
            var idGrn = charIDToTypeID( "Grn " );
            desc18.putDouble( idGrn, c1G );
            var idBl = charIDToTypeID( "Bl  " );
            desc18.putDouble( idBl, c1B );
        var idRGBC = charIDToTypeID( "RGBC" );
        desc17.putObject( idT, idRGBC, desc18 );
        var idSrce = charIDToTypeID( "Srce" );
        desc17.putString( idSrce, """photoshopPicker""" );
    executeAction( idsetd, desc17, DialogModes.NO );    
    }