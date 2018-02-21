var g_ProjectName=window.location.pathname.substring(window.location.pathname.indexOf("/")+1,window.location.pathname.lastIndexOf("/"));
var g_Prefix="http://127.0.0.1"//"http://bigscene.4dage.com";
//var g_Prefix=window.location.href.substring(0,window.location.href.indexOf("/index2.html")+1);
var g_index=null;
var g_modeldata=null;

var g_weixinTitle=null;

var g_Hots=null;
var g_HotMeshes=[];
var g_HotMeshWidth=0.2;
var g_HotMeshHeight=0.2;

//add表示添加，delete表示删除
var g_HotStatus=null;

var g_HotImage="./images/RedPin1LargeB.png";		
var g_saveHot=false;

var g_TextColor=0x7777ff;
var g_Text=null;
var g_TextPlaneMesh=[];
var g_TextIconMesh=[];
var g_TextIcon="./images/text.png";
var g_SelectTextIndex=null;
var g_TextShow=null;
var g_audioPlay=false;
var g_background=null;
var g_audio=null;
var g_NormalTexture=false;
var g_SpecularTexture=false;
var g_DirectionalLight=null;

var g_roof=null;
var g_bgaudio=true;
var g_touraudio=null;