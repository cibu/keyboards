
KeymanWeb.KR(new Keyboard_mozhi_malayalam());

function Keyboard_mozhi_malayalam()
{
  
  this.KI="Keyboard_mozhi_malayalam";
  this.KN="Mozhi Malayalam";
  this.KMINVER="9.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KDU=1;
  this.KV.KLS={

  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KH='';
  this.KM=0;
  this.KBVER="1.2";
  this.KMBM=0x0010;
  this.s_store7="????????????????????????????????????";
  this.s_store8="?";
  this.s_store9="??????";
  this.s_store10="?";
  this.s_store11="?";
  this.s_store12="????????????";
  this.s_store13="?????????????";
  this.s_store14="?????????????";
  this.s_store15="?????????????";
  this.s_store16="??????";
  this.s_store17="??????????0123456789";
  this.s_store18=".\x10.\x10.\x10.\x10.\x10.\x10.\x10.\x10.\x10";
  this.s_store19="?????????";
  this.s_store20=".\x10.\x10.\x10.\x10.\x10";
  this.s_store21="?????";
  this.KVER="10.0.1201.0";
  this.gs=function(t,e) {
    return this.g_group1(t,e);
  };
  this.g_group1=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4000, 0x08)&&k.KA(0,k.KC(3,1,t),this.s_store7)&&k.KA(1,k.KC(2,1,t),this.s_store8)&&k.KA(2,k.KC(1,1,t),this.s_store7)) {   // Line 33
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x08)&&k.KA(0,k.KC(2,1,t),this.s_store7)&&k.KA(1,k.KC(1,1,t),this.s_store8)) {   // Line 34
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x08)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 35
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x08)&&k.KA(0,k.KC(1,1,t),this.s_store14)) {   // Line 36
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x20)&&k.KCM(2,t,"??",2)) {   // Line 37
      r=m=1;
      k.KO(2,t,"? ");
    }
    else if(k.KKM(e, 0x4010, 0x31)) {   // Line 43
      r=m=1;
      k.KO(0,t,"!");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 509
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 510
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store12)) {   // Line 511
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 512
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store14)) {   // Line 513
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KDM(0,t,1)) {   // Line 514
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KDM(0,t,2)) {   // Line 515
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KDM(0,t,0)) {   // Line 516
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KDM(0,t,3)) {   // Line 517
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KDM(0,t,4)) {   // Line 518
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KDM(0,t,5)) {   // Line 519
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store17)) {   // Line 520
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KCM(1,t,"",1)) {   // Line 521
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KCM(1,t,".",1)) {   // Line 522
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KCM(1,t,"?",1)) {   // Line 523
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KCM(1,t,"?",1)) {   // Line 524
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KCM(1,t,",",1)) {   // Line 525
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)&&k.KCM(1,t,"!",1)) {   // Line 526
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xDE)) {   // Line 545
      r=m=1;
      k.KO(0,t,"");
    }
    else if(k.KKM(e, 0x4010, 0x33)) {   // Line 47
      r=m=1;
      k.KO(0,t,"#");
    }
    else if(k.KKM(e, 0x4010, 0x34)) {   // Line 49
      r=m=1;
      k.KO(0,t,"$");
    }
    else if(k.KKM(e, 0x4010, 0x35)) {   // Line 51
      r=m=1;
      k.KO(0,t,"%");
    }
    else if(k.KKM(e, 0x4010, 0x37)) {   // Line 58
      r=m=1;
      k.KO(0,t,"&");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 527
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 528
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store12)) {   // Line 529
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 530
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store14)) {   // Line 531
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KDM(0,t,1)) {   // Line 532
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KDM(0,t,2)) {   // Line 533
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KDM(0,t,0)) {   // Line 534
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KDM(0,t,3)) {   // Line 535
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KDM(0,t,4)) {   // Line 536
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KDM(0,t,5)) {   // Line 537
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KA(0,k.KC(1,1,t),this.s_store17)) {   // Line 538
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"",1)) {   // Line 539
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,".",1)) {   // Line 540
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"?",1)) {   // Line 541
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"?",1)) {   // Line 542
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,",",1)) {   // Line 543
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"!",1)) {   // Line 544
      r=m=1;
      k.KO(-1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0xDE)) {   // Line 546
      r=m=1;
      k.KO(0,t,"");
    }
    else if(k.KKM(e, 0x4010, 0x39)) {   // Line 62
      r=m=1;
      k.KO(0,t,"(");
    }
    else if(k.KKM(e, 0x4010, 0x30)) {   // Line 41
      r=m=1;
      k.KO(0,t,")");
    }
    else if(k.KKM(e, 0x4010, 0x38)) {   // Line 60
      r=m=1;
      k.KO(0,t,"*");
    }
    else if(k.KKM(e, 0x4000, 0xBC)) {   // Line 505
      r=m=1;
      k.KO(0,t,",");
    }
    else if(k.KKM(e, 0x4000, 0xBE)) {   // Line 506
      r=m=1;
      k.KO(0,t,".");
    }
    else if(k.KKM(e, 0x4000, 0xBF)&&k.KCM(1,t,"/",1)) {   // Line 38
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0xBF)) {   // Line 39
      r=m=1;
      k.KO(0,t,"/");
    }
    else if(k.KKM(e, 0x4000, 0x30)&&k.KCM(1,t,"\\",1)) {   // Line 40
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x31)&&k.KCM(1,t,"\\",1)) {   // Line 42
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x32)&&k.KCM(1,t,"\\",1)) {   // Line 44
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x33)&&k.KCM(1,t,"\\",1)) {   // Line 46
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x34)&&k.KCM(1,t,"\\",1)) {   // Line 48
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x35)&&k.KCM(1,t,"\\",1)) {   // Line 50
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x36)&&k.KCM(1,t,"\\",1)) {   // Line 56
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x37)&&k.KCM(1,t,"\\",1)) {   // Line 57
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x38)&&k.KCM(1,t,"\\",1)) {   // Line 59
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x39)&&k.KCM(1,t,"\\",1)) {   // Line 61
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {   // Line 63
      r=m=1;
      k.KO(0,t,";");
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {   // Line 504
      r=m=1;
      k.KO(0,t,":");
    }
    else if(k.KKM(e, 0x4010, 0x32)) {   // Line 45
      r=m=1;
      k.KO(0,t,"@");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 71
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 72
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 73
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 74
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 75
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 76
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 83
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 84
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 85
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 86
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 87
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 88
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 90
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 92
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"?",1)) {   // Line 95
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"@",1)) {   // Line 100
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x41)) {   // Line 102
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x42)) {   // Line 104
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x43)) {   // Line 107
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x44)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 110
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x44)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 111
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x44)) {   // Line 113
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 114
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 116
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 118
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 121
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 123
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 125
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 126
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 128
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 130
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 133
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 135
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 137
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 139
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 141
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"?",1)) {   // Line 146
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"@",1)) {   // Line 148
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x45)) {   // Line 151
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x46)) {   // Line 153
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x47)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,1)) {   // Line 155
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x47)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 158
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x47)) {   // Line 160
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 174
      r=m=1;
      k.KO(2,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 179
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x48)) {   // Line 188
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 189
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 192
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 193
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 196
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 198
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 200
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 202
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 205
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 206
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 209
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 211
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 213
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 215
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 217
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 221
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"@",1)) {   // Line 226
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x49)) {   // Line 229
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4A)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,1)) {   // Line 232
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4A)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 234
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4A)) {   // Line 236
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4B)) {   // Line 242
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4C)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 245
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4C)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 246
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4C)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 248
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4C)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 250
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4C)) {   // Line 252
      r=m=1;
      k.KO(0,t,"?");
      k.KDO(-1,t,4);
    }
    else if(k.KKM(e, 0x4010, 0x4D)) {   // Line 262
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4E)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 265
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4E)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 266
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x4E)) {   // Line 268
      r=m=1;
      k.KO(0,t,"?");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 270
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 272
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 274
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 275
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 277
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 280
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 281
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 284
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 285
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 288
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 290
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 292
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 294
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 296
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 300
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 304
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 305
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"@",1)) {   // Line 307
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x4F)) {   // Line 309
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x50)) {   // Line 316
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x51)) {   // Line 318
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 320
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 321
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 324
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 326
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 327
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 330
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 331
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 334
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 336
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 338
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 339
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 342
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 345
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"???");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 347
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store12)) {   // Line 348
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 349
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store14)) {   // Line 350
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x52)) {   // Line 353
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x53)) {   // Line 357
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x54)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,2)) {   // Line 359
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 362
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 365
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 366
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x54)) {   // Line 368
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 369
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 372
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 373
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 375
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 377
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 379
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 381
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 384
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 386
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 388
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 389
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 391
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 394
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 396
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 400
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"@",1)) {   // Line 409
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x55)) {   // Line 411
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x56)) {   // Line 431
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x58)) {   // Line 452
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x59)&&k.KCM(2,t,"??",2)) {   // Line 466
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0x59)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 468
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"???");
    }
    else if(k.KKM(e, 0x4010, 0x59)) {   // Line 471
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4010, 0x5A)) {   // Line 473
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0xDC)) {   // Line 474
      r=m=1;
      k.KO(0,t,"\\");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,0)) {   // Line 52
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,3)) {   // Line 475
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)) {   // Line 53
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)) {   // Line 54
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)) {   // Line 476
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)) {   // Line 477
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(3,t,"???",3)) {   // Line 478
      r=m=1;
      k.KO(3,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 55
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 479
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(2,t,"??",2)) {   // Line 480
      r=m=1;
      k.KO(2,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(1,t,"?",1)) {   // Line 481
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(1,t,"?",1)) {   // Line 482
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x36)&&k.KCM(1,t,"?",1)) {   // Line 483
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xBD)&&k.KCM(2,t,"??",2)) {   // Line 484
      r=m=1;
      k.KO(2,t,"?");
      k.KDO(-1,t,5);
    }
    else if(k.KKM(e, 0x4010, 0xBD)) {   // Line 485
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(4,t,"????",4)) {   // Line 64
      r=m=1;
      k.KO(4,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 65
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 66
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 67
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 68
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 69
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 70
      r=m=1;
      k.KO(2,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 77
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 78
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 79
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 80
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 81
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 82
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 89
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 91
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 93
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)) {   // Line 94
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)) {   // Line 96
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)) {   // Line 97
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"?",1)) {   // Line 98
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"@",1)) {   // Line 99
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x41)) {   // Line 101
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x42)) {   // Line 103
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x43)&&k.KDM(2,t,6)&&k.KCM(2,t,"??",2)) {   // Line 105
      r=m=1;
      k.KDO(2,t,7);
      k.KO(-1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x43)) {   // Line 106
      r=m=1;
      k.KDO(0,t,6);
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x44)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 108
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x44)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 109
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x44)) {   // Line 112
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 115
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 117
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 119
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 120
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 122
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 124
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 127
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 129
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 131
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 132
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 134
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 136
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 138
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 140
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)) {   // Line 142
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)) {   // Line 143
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)) {   // Line 144
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"?",1)) {   // Line 145
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"@",1)) {   // Line 147
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 149
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x45)) {   // Line 150
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x46)) {   // Line 152
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x47)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,2)) {   // Line 154
      r=m=1;
      k.KO(3,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x47)&&k.KCM(4,t,"????",4)) {   // Line 156
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x47)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 157
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x47)) {   // Line 159
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(5,t,"???",3)&&k.KDM(2,t,2)&&k.KDM(2,t,6)&&k.KCM(2,t,"??",2)) {   // Line 161
      r=m=1;
      k.KO(5,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KDM(4,t,7)&&k.KCM(4,t,"????",4)) {   // Line 162
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(3,t,"?",1)&&k.KDM(2,t,2)&&k.KDM(2,t,6)&&k.KCM(2,t,"??",2)) {   // Line 163
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(4,t,"????",4)) {   // Line 164
      r=m=1;
      k.KO(4,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(4,t,"????",4)) {   // Line 165
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(4,t,"????",4)) {   // Line 166
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(4,t,"????",4)) {   // Line 167
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,2)) {   // Line 168
      r=m=1;
      k.KO(3,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(4,t,"????",4)) {   // Line 169
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KDM(2,t,6)&&k.KCM(2,t,"??",2)) {   // Line 170
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(3,t,"???",3)) {   // Line 171
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 172
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 173
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 175
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 176
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 177
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 178
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 180
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 181
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 182
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 183
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 184
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(2,t,"??",2)) {   // Line 185
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 186
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x48)) {   // Line 187
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 190
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 191
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 194
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 195
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 197
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 199
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KDM(2,t,6)&&k.KCM(2,t,"??",2)) {   // Line 201
      r=m=1;
      k.KO(2,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 203
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 204
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 207
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 208
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 210
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 212
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 214
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 216
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 218
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 219
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 220
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 222
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 223
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 224
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"@",1)) {   // Line 225
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"?",1)) {   // Line 227
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x49)) {   // Line 228
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4A)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,2)) {   // Line 230
      r=m=1;
      k.KO(3,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4A)&&k.KCM(4,t,"????",4)) {   // Line 231
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4A)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 233
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4A)) {   // Line 235
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4B)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,2)) {   // Line 237
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4B)&&k.KCM(2,t,"??",2)) {   // Line 238
      r=m=1;
      k.KO(2,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4B)&&k.KCM(2,t,"??",2)) {   // Line 239
      r=m=1;
      k.KO(-1,t,"???");
    }
    else if(k.KKM(e, 0x4000, 0x4B)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 240
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4B)) {   // Line 241
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4C)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 243
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4C)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 244
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4C)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 247
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4C)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 249
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4C)) {   // Line 251
      r=m=1;
      k.KO(0,t,"?");
      k.KDO(-1,t,3);
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 253
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 254
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 255
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 256
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 257
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KA(0,k.KC(1,1,t),this.s_store12)) {   // Line 258
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KA(0,k.KC(1,1,t),this.s_store14)) {   // Line 259
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4D)&&k.KCM(1,t,"?",1)) {   // Line 260
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4D)) {   // Line 261
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4E)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 263
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4E)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 264
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x4E)) {   // Line 267
      r=m=1;
      k.KO(0,t,"?");
      k.KDO(-1,t,2);
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 269
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 271
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 273
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 276
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 278
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 279
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 282
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 283
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 286
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 287
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 289
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 291
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 293
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 295
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 297
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 298
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 299
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 301
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 302
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"?",1)) {   // Line 303
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"@",1)) {   // Line 306
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x4F)) {   // Line 308
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x50)&&k.KCM(4,t,"????",4)) {   // Line 310
      r=m=1;
      k.KO(4,t,"?????");
    }
    else if(k.KKM(e, 0x4000, 0x50)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 311
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x50)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 312
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x50)&&k.KCM(2,t,"??",2)) {   // Line 313
      r=m=1;
      k.KO(2,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x50)&&k.KCM(1,t,"?",1)) {   // Line 314
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x50)) {   // Line 315
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x51)) {   // Line 317
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 319
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 322
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 323
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 325
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 328
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 329
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 332
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 333
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 335
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 337
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 340
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 341
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(2,t,"??",2)) {   // Line 343
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 344
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"???");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 346
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x52)&&k.KCM(1,t,"@",1)) {   // Line 351
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x52)) {   // Line 352
      r=m=1;
      k.KO(0,t,"?");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, 0x4000, 0x53)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,3)) {   // Line 354
      r=m=1;
      k.KO(3,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x53)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 355
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x53)) {   // Line 356
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x54)&&k.KCM(4,t,"????",4)) {   // Line 358
      r=m=1;
      k.KO(4,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 360
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 361
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 363
      r=m=1;
      k.KO(1,t,"");
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x54)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 364
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x54)) {   // Line 367
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,1)) {   // Line 370
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,2)) {   // Line 371
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,0)) {   // Line 374
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,3)) {   // Line 376
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,4)) {   // Line 378
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(2,t,"??",2)&&k.KDM(0,t,5)) {   // Line 380
      r=m=1;
      k.KO(2,t,"");
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 382
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 383
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 385
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 387
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 390
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 392
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 393
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 395
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 397
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 398
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 399
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 401
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 402
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 403
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 404
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 405
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 406
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"?",1)) {   // Line 407
      r=m=1;
      k.KO(1,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"@",1)) {   // Line 408
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x55)) {   // Line 410
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,4)) {   // Line 412
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,0)) {   // Line 413
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 414
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 415
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 416
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 417
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 418
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 419
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 420
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 421
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 422
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 423
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 424
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 425
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 426
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 427
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(2,t,"??",2)) {   // Line 428
      r=m=1;
      k.KO(2,t,"?????");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 429
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x56)) {   // Line 430
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,4)) {   // Line 432
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(3,t,"???",3)&&k.KDM(0,t,0)) {   // Line 433
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 434
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 435
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 436
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 437
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 438
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 439
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 440
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 441
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 442
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 443
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 444
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 445
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 446
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 447
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KCM(2,t,"??",2)) {   // Line 448
      r=m=1;
      k.KO(2,t,"?????");
    }
    else if(k.KKM(e, 0x4000, 0x57)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 449
      r=m=1;
      k.KO(-1,t,"???");
    }
    else if(k.KKM(e, 0x4000, 0x57)) {   // Line 450
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x58)) {   // Line 451
      r=m=1;
      k.KO(0,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 453
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 454
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 455
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 456
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 457
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 458
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 459
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 460
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 461
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 462
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 463
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 464
      r=m=1;
      k.KO(1,t,"????");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KCM(2,t,"??",2)) {   // Line 465
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 467
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"???");
    }
    else if(k.KKM(e, 0x4000, 0x59)&&k.KA(0,k.KC(1,1,t),this.s_store8)) {   // Line 469
      r=m=1;
      k.KO(-1,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x59)) {   // Line 470
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4000, 0x5A)) {   // Line 472
      r=m=1;
      k.KO(0,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xDC)) {   // Line 486
      r=m=1;
      k.KO(0,t,"|");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 487
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,1)) {   // Line 488
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 489
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,2)) {   // Line 490
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 491
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,0)) {   // Line 492
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 493
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,3)) {   // Line 494
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 495
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,4)) {   // Line 496
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 497
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)&&k.KDM(0,t,5)) {   // Line 498
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)) {   // Line 499
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KA(0,k.KC(1,1,t),this.s_store10)) {   // Line 500
      r=m=1;
      k.KIO(1,this.s_store11,1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)) {   // Line 501
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KA(0,k.KC(1,1,t),this.s_store7)) {   // Line 502
      r=m=1;
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)) {   // Line 503
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)&&k.KCM(1,t,"?",1)) {   // Line 507
      r=m=1;
      k.KO(1,t,"??");
    }
    else if(k.KKM(e, 0x4010, 0xC0)) {   // Line 508
      r=m=1;
      k.KO(0,t,"?");
    }
    return r;
  };
}
