
    $(document).ready(function(){

      $('#exampleModalLong').modal({backdrop: 'static', keyboard: false,show:false})

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
//same as present address
$('#chkCopy').click(function(){
if($('#chkCopy').is(':checked')){
$('#nameBill').val($('#nameShip').val());
$('#address1Bill').val($('#address1Ship').val());

$('#address2Bill').val($('#address2Ship').val());
$('#cityBill').val($('#cityShip').val());
} else { 
//Clear on uncheck
$('#nameBill').val("");
$('#address1Bill').val("");
$('#address2Bill').val("");
$('#cityBill').val("");

};

});
$(document).on('click', '.edit', function() {
$(this).parent().siblings('td.data').each(function() {
var content = $(this).html();
$(this).html('<input value="' + content + '" />');
});

$(this).siblings('.save').show();
$(this).siblings('.delete').hide();
$(this).hide();
});

$(document).on('click', '.save', function() {

$('input').each(function() {
var content = $(this).val();
$(this).html(content);
$(this).contents().unwrap();
});
$(this).siblings('.edit').show();
$(this).siblings('.delete').show();
$(this).hide();

});


// $(document).on('click', '.delete', function() {
// $(this).parents('tr').remove();
// });
//   let tBody = document.getElementById('myTable');
// let modal = document.getElementById('myModal');
// let tr = tBody.getElementsByTagName('TR');
// let span = document.getElementsByClassName("close")[1];


// // When the user clicks on the button, open the modal 
// for (let i = 0; i < tr.length; i++) {
// tr[i]. onclick = function() {
// modal.style.display = "block";
// modal.style.overflow = "auto";
// modal.style.overflowX= "auto";


// console.log(this.firstElementChild.innerHTML + ' Selected'); 
// };
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
//   modal.style.display = "none";
// }
// }



// To make elements readonly
$('#myModal :input').prop('readonly', true); 
$('#sign12').prop('readonly', true);
$("#fileo").prop('disabled', true);

$(document).on('click', '.browse', function(){
var file = $(this).parent().parent().parent().find('.file');
file.trigger('click');
});
$(document).on('change', '#browse', function(){
$(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});

$('.clickable').click(function(){
if($(this).hasClass('collapsed'))  {
$(this).text('Less');

} 
});




$(document).on('keypress', ':input[type="number"]', function (e) {
if (isNaN(e.key)) {
return false;
}
});

$("#myTable tr").click(function(){
$(this).addClass("selected").siblings().removeClass("selected");
});

$('#editdrop').change(function () {
if ($(this).closest('.table').find('option[value=' + $(this).val() + ']:selected').length > 1)
{
alert('option is already selected');
$(this).val($(this).find("option:first").val());
}
});

UPLOADCARE_LOCALE_TRANSLATIONS = {
buttons: {
choose: {
files: {
  one: '<i class ="fa fa-upload"></i>',
  other: '<i class ="fa fa-upload"></i> '
},
images: {
  one: '<i class ="fa fa-upload"></i>',
  other: '<i class ="fa fa-upload"></i>'
}

}

}
};

});

$(function () {
  // $("#btnAddd").bind("click", function () {
  //     var div = $("<tr />");
  //     div.html(GetDynamicTextBox(""));
  //     $("#TextBoxContainerr").append(div);
  // });
  $("body").on("click", "#closee", function () {
    var table = document.getElementById("TextBoxContainerr");
    var rowCount = table.rows.length;

    if (rowCount > 1) {
      

      $(this).closest("tr").remove();
    }
      else {
        alert("You have to upload at least one document.");
        return GetDynamicTextBox(value) ;

      } 
     
  });
  
 

});
// function GetDynamicTextBox(value) {
//   return '<td > <div class="form-group"style="position: relative;top: -7px;"><i class="fa fa-caret-down "id="drop"></i><select class="form-control" id="editdrop" style="width: 200px;"><option hidde="" selected="">&nbsp;</option><option>Community Certificate</option><option>Transfer Certificate</option><option>Conduct Certificate</option><option>Eligiblity Certificate</option><option>Migration Certificate</option><option>Admission Commitee Form</option><option>Others</option></select></div></td>'
//  + '<td><input style="position: relativ;top: -10px;" type="text" name="" class="form-control"></td>' + 
//  '<td><input style="position: relativ;top: -10px;"type="Date" name="" class="form-control"></td>' + 
//  '<td><input style="position: relativ;top: -10px;"type="text" name="" class="form-control"></td>' + 
//  '<td><input style="position: relativ;top: -10px;" type="text" name="" class="form-control"></td>' + 

//  '<td id="td"> <p><input style="position: relativ;top: -10px;" type="hidden" id="images" name="images"role="uploadcare-uploader" data-clearable=""   data-max-width="2048"data-max-height="2048"data-integration="" /></p> <button type="button"id="closee" class="btn-sm btn-danger remove ml-3"><i class="fa fa-times" aria-hidden="true"></i></button></td>'

// }

$(function () {
// $("#btnAdd").bind("click", function () {
//     var div = $("<tr />");
//     div.html(GetDynamicTextBoxx(""));
//     $("#TextBoxContainer").append(div);
// });
$("body").on("click", "#close", function () {
var table = document.getElementById("TextBoxContainer");
var rowCountt = table.rows.length;

if (rowCountt > 1) {


$(this).closest("tr").remove();
}
else {
  alert("You have to upload at least one document.");
  return GetDynamicTextBoxx(value) ;

} 

});

});

// function GetDynamicTextBoxx(value) {
//   return '<td> <div class="form-group"style="position: relative;top: -7px;"><i class="fa fa-caret-down "id="drop"></i><select class="form-control" id="editdrop" style="width: 200px;"><option hidde="" selected="">&nbsp;</option><option>Community Certificate</option><option>Transfer Certificate</option><option>Conduct Certificate</option><option>Eligiblity Certificate</option><option>Migration Certificate</option><option>Admission Commitee Form</option><option>Others</option></select></div></td>'
//  + '<td><input style="position: relativ;top: 10px;" type="text" name="" class="form-control"></td>' + 
//  '<td><input style="position: relativ;top: 10px;" type="Date" name="" class="form-control"></td>' + 
//  '<td><input style="position: relativ;top: 10px;"  type="text" name="" class="form-control"></td>' + 
//  '<td><input style="position: relativ;top: 10px;"  type="text" name="" class="form-control"></td>' + 

//  '<td id="td"> <p  style="position: relativ;top: 10px;"><input  type="hidden" id="images" name="images"role="uploadcare-uploader" data-clearable=""   data-max-width="2048"data-max-height="2048"data-integration="" /></p> <button style="position: relativ;top: 10px;" type="button"id="close" class="btn-sm btn-danger remove ml-3"><i class="fa fa-times" aria-hidden="true"></i></button></td>'

// }
// function getInputValue(){
//   // Selecting the input element and get its value 
//   var inputVal = document.getElementById("name").value;
//   document.getElementById("p").innerHTML=inputVal;
//   // Displaying the value
//   alert(inputVal);
// }

function do_resize(textbox) {

var maxrows=4; 
var txt=textbox.value;
var cols=textbox.cols;

var arraytxt=txt.split('\n');
var rows=arraytxt.length; 

for (i=0;i<arraytxt.length;i++) 
rows+=parseInt(arraytxt[i].length/cols);

if (rows>maxrows) textbox.rows=maxrows;
else textbox.rows=rows;
}
function myFunction() {

document.getElementById("description_id").rows = 3;
document.getElementById("description_id").cols = 10;

}
function desc3(){
document.getElementById("description3").rows = 3;

document.getElementById("description3").cols = 10;
}
function desc4(){
document.getElementById("description4").rows = 3;

document.getElementById("description4").cols = 10;
}
function desc2(){
document.getElementById("description2").rows = 3;

document.getElementById("description2").cols = 10;
}

// $(document).ready(function(){
//   $(".announce").click(function(){ // Click to only happen on announce links
//     $("#name").val($(this).data('id'));
//     $('#edit').modal('sho');
//   });
// });
// $(document).ready(function(){
//   $("#relv-tab").click(function(){ // Click to only happen on announce links
//   alert('hey buddy');

//   });
// });
function relv() {
$('#collapse-195').collapse('show')

};
function surety() {
$('#collapse-1100').collapse('show')

};
function home() {
$('#collapse-15').collapse('show')

}
function profile() {
$('#collapse-1-25').collapse('show')

}
function bank() {
$('#collapse-115').collapse('show')

}
function contact() {
$('#collapse-125').collapse('show')

}
$(document).ready(function () {
$('#files').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files1').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name1');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files2').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name2');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files3').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name3');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files4').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name4');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files5').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name5');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files6').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name6');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});
$('#files7').on('change', function () {
var target = $(this);
var relatedTarget = target.siblings('.file-name7');
var fileName = target[0].files[0].name;
relatedTarget.val(fileName);
});

$('#files71').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name71');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files72').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name72');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files73').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name73');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files74').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name74');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files75').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name75');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files76').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name76');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files77').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name77');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
    
$('#files78').on('change', function () {
    var target = $(this);
    var relatedTarget = target.siblings('.file-name78');
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
    });
});

$(document).ready(function () {
      var sign = $('#txt').SignaturePad({
          allowToSign: true,
          img64: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          border: '1px solid #c7c8c9',
          width: '300px',
          height: '150px',
          callback: function (data, action) {
              console.log(data);
          }
      });

      var sign = $('#txt2').SignaturePad({
          allowToSign: true,
          img64: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          border: '1px solid #c7c8c9',
          width: '300px',
          height: '150px',
          callback: function (data, action) {
              console.log(data);
          }
      });

  })

//sketch lib
(function () {
var __slice = [].slice;

(function ($) {
var Sketch;
$.fn.sketch = function () {
    var args, key, sketch;
    key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (this.length > 1) {
        $.error('Sketch.js can only be called on one element at a time.');
    }
    sketch = this.data('sketch');
    if (typeof key === 'string' && sketch) {
        if (sketch[key]) {
            if (typeof sketch[key] === 'function') {
                return sketch[key].apply(sketch, args);
            } else if (args.length === 0) {
                return sketch[key];
            } else if (args.length === 1) {
                return sketch[key] = args[0];
            }
        } else {
            return $.error('Sketch.js did not recognize the given command.');
        }
    } else if (sketch) {
        return sketch;
    } else {
        this.data('sketch', new Sketch(this.get(0), key));
        return this;
    }
};
Sketch = (function () {

    function Sketch(el, opts) {
        this.el = el;
        this.canvas = $(el);
        this.context = el.getContext('2d');
        this.options = $.extend({
            toolLinks: true,
            defaultTool: 'marker',
            defaultColor: '#000000',
            defaultSize: 2
        }, opts);
        this.painting = false;
        this.color = this.options.defaultColor;
        this.size = this.options.defaultSize;
        this.tool = this.options.defaultTool;
        this.actions = [];
        this.action = [];
        this.canvas.bind('click mousedown mouseup mousemove mouseleave mouseout touchstart touchmove touchend touchcancel', this.onEvent);
        if (this.options.toolLinks) {
            $('body').delegate("a[href=\"#" + (this.canvas.attr('id')) + "\"]", 'click', function (e) {
                var $canvas, $this, key, sketch, _i, _len, _ref;
                $this = $(this);
                $canvas = $($this.attr('href'));
                sketch = $canvas.data('sketch');
                _ref = ['color', 'size', 'tool'];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    key = _ref[_i];
                    if ($this.attr("data-" + key)) {
                        sketch.set(key, $(this).attr("data-" + key));
                    }
                }
                if ($(this).attr('data-download')) {
                    sketch.download($(this).attr('data-download'));
                }
                return false;
            });
        }
    }

    Sketch.prototype.download = function (format) {
        var mime;
        format || (format = "png");
        if (format === "jpg") {
            format = "jpeg";
        }
        mime = "image/" + format;
        return window.open(this.el.toDataURL(mime));
    };

    Sketch.prototype.set = function (key, value) {
        this[key] = value;
        return this.canvas.trigger("sketch.change" + key, value);
    };

    Sketch.prototype.startPainting = function () {
        this.painting = true;
        return this.action = {
            tool: this.tool,
            color: this.color,
            size: parseFloat(this.size),
            events: []
        };
    };


    Sketch.prototype.stopPainting = function () {
        if (this.action) {
            this.actions.push(this.action);
        }
        this.painting = false;
        this.action = null;
        return this.redraw();
    };

    Sketch.prototype.onEvent = function (e) {
        if (e.originalEvent && e.originalEvent.targetTouches) {
            e.pageX = e.originalEvent.targetTouches[0].pageX;
            e.pageY = e.originalEvent.targetTouches[0].pageY;
        }
        $.sketch.tools[$(this).data('sketch').tool].onEvent.call($(this).data('sketch'), e);
        e.preventDefault();
        return false;
    };

    Sketch.prototype.redraw = function () {
        var sketch;
        //this.el.width = this.canvas.width();
        this.context = this.el.getContext('2d');
        sketch = this;
        $.each(this.actions, function () {
            if (this.tool) {
                return $.sketch.tools[this.tool].draw.call(sketch, this);
            }
        });
        if (this.painting && this.action) {
            return $.sketch.tools[this.action.tool].draw.call(sketch, this.action);
        }
    };

    return Sketch;

})();
$.sketch = {
    tools: {}
};
$.sketch.tools.marker = {
    onEvent: function (e) {
        switch (e.type) {
            case 'mousedown':
            case 'touchstart':
                if (this.painting) {
                    this.stopPainting();
                }
                this.startPainting();
                break;
            case 'mouseup':
                //return this.context.globalCompositeOperation = oldcomposite;
            case 'mouseout':
            case 'mouseleave':
            case 'touchend':
                //this.stopPainting();
            case 'touchcancel':
                this.stopPainting();
        }
        if (this.painting) {
            this.action.events.push({
                x: e.pageX - this.canvas.offset().left,
                y: e.pageY - this.canvas.offset().top,
                event: e.type
            });
            return this.redraw();
        }
    },
    draw: function (action) {
        var event, previous, _i, _len, _ref;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.beginPath();
        this.context.moveTo(action.events[0].x, action.events[0].y);
        _ref = action.events;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            event = _ref[_i];
            this.context.lineTo(event.x, event.y);
            previous = event;
        }
        this.context.strokeStyle = action.color;
        this.context.lineWidth = action.size;
        return this.context.stroke();
    }
};
return $.sketch.tools.eraser = {
    onEvent: function (e) {
        return $.sketch.tools.marker.onEvent.call(this, e);
    },
    draw: function (action) {
        var oldcomposite;
        oldcomposite = this.context.globalCompositeOperation;
        this.context.globalCompositeOperation = "destination-out";
        action.color = "rgba(0,0,0,1)";
        $.sketch.tools.marker.draw.call(this, action);
        return this.context.globalCompositeOperation = oldcomposite;
    }
};
})(jQuery);

}).call(this);


(function ($) {
$.fn.SignaturePad = function (options) {

//update the settings
var settings = $.extend({
    allowToSign: true,
    img64: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    border: '1px solid #c7c8c9',
    width: '300px',
    height: '150px',
    callback: function () {
        return true;
    }
}, options);

//control should be a textbox
//loop all the controls
var id = 0;

//add a very big pad
var big_pad = $('#signPadBig');
var back_drop = $('#signPadBigBackDrop');
var canvas = undefined;
if (big_pad.length == 0) {

    back_drop = $('<div>')
    back_drop.css('position', 'fixed');
    back_drop.css('top', '0');
    back_drop.css('right', '0');
    back_drop.css('bottom', '0');
    back_drop.css('left', '0');
    back_drop.css('z-index', '1040 !important');
    back_drop.css('background-color', '#000');
    back_drop.css('display', 'none');
    back_drop.css('filter', 'alpha(opacity=50)');
    back_drop.css('opacity', '0.5');
    $('body').append(back_drop);

    big_pad = $('<div>');
    big_pad.css('display', 'none');
    big_pad.css('position', 'fixed');
    big_pad.css('margin', '0 auto');
    big_pad.css('top', '0');
    big_pad.css('bottom', '0');
    big_pad.css('right', '0');
    big_pad.css('left', '0');
    big_pad.css('z-index', '1000002 !important');
    big_pad.css('overflow', 'hidden');
    big_pad.css('outline', '0');
    big_pad.css('-webkit-overflow-scrolling', 'touch');

    big_pad.css('right', '0');
    big_pad.css('border', '1px solid #c8c8c8');
    big_pad.css('padding', '15px');
    big_pad.css('background-color', 'white');
    big_pad.css('margin-top', '15px');
    big_pad.css('width', '95%');
    big_pad.css('height', '90%');
    big_pad.css('border-radius', '10px');
    big_pad.attr('id', 'signPadBig');
    $('body').append(big_pad);

    var update_canvas_size = function () {
        var w = big_pad.width() //* 0.95;
        var h = big_pad.height() - 55;

        canvas.attr('width', w);
        canvas.attr('height', h);
    }


    canvas = $('<canvas>');
    canvas.css('display', 'block');
    canvas.css('margin', '0 auto');
    canvas.css('border', '1px solid #c8c8c8');
    canvas.css('border-radius', '10px');
    //canvas.css('width', '90%');
    //canvas.css('height', '80%');
    big_pad.append(canvas);

    update_canvas_size();
    $(window).on('resize', function () {
        update_canvas_size();
    });

    var clearCanvas = function () {
        canvas.sketch().action = null;
        canvas.sketch().actions = [];       // this line empties the actions. 
        var ctx = canvas[0].getContext("2d");
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
        return true
    }

    var _get_base64_value = function () {
        var text_control = $.data(big_pad[0], 'control');  //settings.control; // $('#' + big_pad.attr('id'));
        return $(text_control).val();
    }

    var copyCanvas = function () {
        //get data from bigger pad
        var sigData = canvas[0].toDataURL("image/png");

        var _img = new Image;
        _img.onload = resizeImage;
        _img.src = sigData;

        var targetWidth = canvas.width();
        var targetHeight = canvas.height();

        function resizeImage() {
            var imageToDataUri = function (img, width, height) {

                // create an off-screen canvas
                var canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');

                // set its dimension to target size
                canvas.width = width;
                canvas.height = height;

                // draw source image into the off-screen canvas:
                ctx.drawImage(img, 0, 0, width, height);

                // encode image to data-uri with base64 version of compressed image
                return canvas.toDataURL();
            }

            var newDataUri = imageToDataUri(this, targetWidth, targetHeight);
            var control_img = $.data(big_pad[0], 'img');
            if (control_img)
                $(control_img).attr("src", newDataUri);

            var text_control = $.data(big_pad[0], 'control');  //settings.control; // $('#' + big_pad.attr('id'));
            if (text_control)
                $(text_control).val(newDataUri);
        }
    }

    var buttons = [
         {
             title: 'Close',
             callback: function () {
                 clearCanvas();
                 big_pad.slideToggle(function () {
                     back_drop.hide('fade');
                 });

             }
         },
         {
             title: 'Clear',
             callback: function () {
                 clearCanvas();
                 if (settings.callback)
                     settings.callback(_get_base64_value(), 'clear');
             }
         },
         {
             title: 'Accept',
             callback: function () {
                 copyCanvas();
                 clearCanvas();
                 big_pad.slideToggle(function () {
                     back_drop.hide('fade', function () {
                         if (settings.callback)
                             settings.callback(_get_base64_value(), 'accept');
                     });
                 });
             }
         }].forEach(function (e) {
             var btn = $('<button>');
             btn.attr('type', 'button');
             btn.css('border', '1px solid #c8c8c8');
             btn.css('background-color', 'white');
             btn.css('padding', '10px');
             btn.css('display', 'block');
             btn.css('margin-top', '15px');
             btn.css('margin-right', '5px');
             btn.css('cursor', 'pointer');
             btn.css('border-radius', '5px');
             btn.css('float', 'right');
             btn.css('height', '40px');
             btn.text(e.title);
             btn.on('click', function () {
                 e.callback(e.title);
             })
             big_pad.append(btn);

         });

}
else {
    canvas = big_pad.find('canvas')[0];
}

//init the signpad
if (canvas) {
    var sign1big = $(canvas).sketch({ defaultColor: "#000", defaultSize: 5 });
}

//for each control
return this.each(function () {

    var control = $(this);
    control.hide();

    //get the control parent
    var wrapper = control.parent();
    var img = $('<img>');

    //style it
    img.css("cursor", "pointer");
    img.css("border", settings.border);
    img.css("height", settings.height);
    img.css("width", settings.width);
    img.css('border-radius', '5px')
    img.attr("src", settings.img64);

    if (typeof (wrapper) == 'object') {
        wrapper.append(img);
    }




    //init the big sign pad
    if (settings.allowToSign == true) {
        //click to the pad bigger
        img.on('click', function () {
            //show the pad
            back_drop.show();
            big_pad.slideToggle();

            //save control to use later
            $.data(big_pad[0], 'img', img);
            $.data(big_pad[0], 'control', control);

            //settings.control = control;
            //settings.img = img;
        });
    }
});
};


})(jQuery);


