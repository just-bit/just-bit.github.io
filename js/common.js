var wrapPrograms  = document.querySelector('.programs__main');
var wrapLibs  = document.querySelector('.libs__main');
var wrapDrivers  = document.querySelector('.drivers__main');

// programs__main

var ultraIso       = document.querySelector('.ultra-iso');
var dTools         = document.querySelector('.dtools');
var nero           = document.querySelector('.nero');
var chrome         = document.querySelector('.chrome');
var firefox        = document.querySelector('.firefox');
var opera          = document.querySelector('.opera');
var sevenZ         = document.querySelector('.seven-z');
var photoshop      = document.querySelector('.photoshop');
var aimp           = document.querySelector('.aimp');
var avast          = document.querySelector('.avast');
var fastStone      = document.querySelector('.fast-stone');
var codecs         = document.querySelector('.codecs');
var mediaInfo      = document.querySelector('.media-info');
var mOffice        = document.querySelector('.m-office');
var qbittorrent    = document.querySelector('.qbittorrent');
var stduViewer     = document.querySelector('.stdu-viewer');
var totalCommander = document.querySelector('.total-commander');
var uninstallTool  = document.querySelector('.uninstall-tool');
var unlocker       = document.querySelector('.unlocker');
var vlc            = document.querySelector('.vlc');
var winrar         = document.querySelector('.winrar');

var ultraIsoDesc       = document.querySelector('.programs__ultra-iso');
var dToolsDesc         = document.querySelector('.programs__dtools');
var neroDesc           = document.querySelector('.programs__nero');
var chromeDesc         = document.querySelector('.programs__chrome');
var firefoxDesc        = document.querySelector('.programs__firefox');
var operaDesc          = document.querySelector('.programs__opera');
var sevenZDesc         = document.querySelector('.programs__seven-z');
var photoshopDesc      = document.querySelector('.programs__photoshop');
var aimpDesc           = document.querySelector('.programs__aimp');
var avastDesc          = document.querySelector('.programs__avast');
var fastStoneDesc      = document.querySelector('.programs__fast-stone');
var codecsDesc         = document.querySelector('.programs__codecs');
var mediaInfoDesc      = document.querySelector('.programs__media-info');
var mOfficeDesc        = document.querySelector('.programs__m-office');
var qbittorrentDesc    = document.querySelector('.programs__qbittorrent');
var stduViewerDesc     = document.querySelector('.programs__stdu-viewer');
var totalCommanderDesc = document.querySelector('.programs__total-commander');
var uninstallToolDesc  = document.querySelector('.programs__uninstall-tool');
var unlockerDesc       = document.querySelector('.programs__unlocker');
var vlcDesc            = document.querySelector('.programs__vlc');
var winrarDesc         = document.querySelector('.programs__winrar');

var ultraIsoDescBtn       = document.querySelector('.ultra-iso-btn-back');
var dToolsDescBtn         = document.querySelector('.dtools-btn-back');
var neroDescBtn           = document.querySelector('.nero-btn-back');
var chromeDescBtn         = document.querySelector('.chrome-btn-back');
var firefoxDescBtn        = document.querySelector('.firefox-btn-back');
var operaDescBtn          = document.querySelector('.opera-btn-back');
var sevenZDescBtn         = document.querySelector('.seven-z-btn-back');
var photoshopDescBtn      = document.querySelector('.photoshop-btn-back');
var aimpDescBtn           = document.querySelector('.aimp-btn-back');
var avastDescBtn          = document.querySelector('.avast-btn-back');
var fastStoneDescBtn      = document.querySelector('.fast-stone-btn-back');
var codecsDescBtn         = document.querySelector('.codecs-btn-back');
var mediaInfoDescBtn      = document.querySelector('.media-info-btn-back');
var mOfficeDescBtn        = document.querySelector('.m-office-btn-back');
var qbittorrentDescBtn    = document.querySelector('.qbittorrent-btn-back');
var stduViewerDescBtn     = document.querySelector('.stdu-viewer-btn-back');
var totalCommanderDescBtn = document.querySelector('.total-commander-btn-back');
var uninstallToolDescBtn  = document.querySelector('.uninstall-tool-btn-back');
var unlockerDescBtn       = document.querySelector('.unlocker-btn-back');
var vlcDescBtn            = document.querySelector('.vlc-btn-back');
var winrarDescBtn         = document.querySelector('.winrar-btn-back');

// libs__main

var microCoreXml      = document.querySelector('.microsoft-core-xml');
var microVisualC      = document.querySelector('.microsoft-vicual-c');
var physX             = document.querySelector('.physx');
var directX           = document.querySelector('.directx');
var flashPlayer       = document.querySelector('.flash-player');
var java              = document.querySelector('.java');
var microSilverlight  = document.querySelector('.microsoft-silverlight');
var microNetFraemwork = document.querySelector('.microsoft-netfraemwork');
var openAl            = document.querySelector('.open-al');
var runtimePack       = document.querySelector('.runtime-pack');
var unity             = document.querySelector('.unity');

var microCoreXmlDesc      = document.querySelector('.libs__microsoft-core-xml');
var microVisualCDesc      = document.querySelector('.libs__microsoft-vicual-c');
var physXDesc             = document.querySelector('.libs__physx');
var directXDesc           = document.querySelector('.libs__directx');
var flashPlayerDesc       = document.querySelector('.libs__flash-player');
var javaDesc              = document.querySelector('.libs__java');
var microSilverlightDesc  = document.querySelector('.libs__microsoft-silverlight');
var microNetFraemworkDesc = document.querySelector('.libs___microsoft-netfraemwork');
var openAlDesc            = document.querySelector('.libs__open-al');
var runtimePackDesc       = document.querySelector('.libs__runtime-pack');
var unityDesc             = document.querySelector('.libs__unity');

var microCoreXmlDescBtn      = document.querySelector('.microsoft-core-xml-btn-back');
var microVisualCDescBtn      = document.querySelector('.microsoft-vicual-c-btn-back');
var physXDescBtn             = document.querySelector('.physx-btn-back');
var directXDescBtn           = document.querySelector('.directx-btn-back');
var flashPlayerDescBtn       = document.querySelector('.flash-player-btn-back');
var javaDescBtn              = document.querySelector('.java-btn-back');
var microSilverlightDescBtn  = document.querySelector('.microsoft-silverlight-btn-back');
var microNetFraemworkDescBtn = document.querySelector('.microsoft-netfraemwork-btn-back');
var openAlDescBtn            = document.querySelector('.open-al-btn-back');
var runtimePackDescBtn       = document.querySelector('.runtime-pack-btn-back');
var unityDescBtn             = document.querySelector('.unity-btn-back');

// drivers__main

var  driversLan = document.querySelector('.drivers-lan-offline');
var  driversAll = document.querySelector('.drivers-all-online');

var driversLanDesc = document.querySelector('.drivers__lan-offline');
var driversAllDesc = document.querySelector('.drivers__all-online');

var driversLanDescBtn = document.querySelector('.lan-offline-btn-back');
var driversAllDescBtn = document.querySelector('.all-online-btn-back');

// write the  damned code

// open desc programs

ultraIso.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	ultraIsoDesc.classList.remove('hiden');
})

dTools.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	dToolsDesc.classList.remove('hiden');
})

nero.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	neroDesc.classList.remove('hiden');
})

chrome.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	chromeDesc.classList.remove('hiden');
})

firefox.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	firefoxDesc.classList.remove('hiden');
})

opera.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	operaDesc.classList.remove('hiden');
})

sevenZ.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	sevenZDesc.classList.remove('hiden');
})

photoshop.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	photoshopDesc.classList.remove('hiden');
})

aimp.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	aimpDesc.classList.remove('hiden');
})

avast.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	avastDesc.classList.remove('hiden');
})

fastStone.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	fastStoneDesc.classList.remove('hiden');
})

codecs.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	codecsDesc.classList.remove('hiden');
})

mediaInfo.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	mediaInfoDesc.classList.remove('hiden');
})

mOffice.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	mOfficeDesc.classList.remove('hiden');
})

qbittorrent.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	qbittorrentDesc.classList.remove('hiden');
})

stduViewer.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	stduViewerDesc.classList.remove('hiden');
})

totalCommander.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	totalCommanderDesc.classList.remove('hiden');
})

uninstallTool.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	uninstallToolDesc.classList.remove('hiden');
})

unlocker.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	unlockerDesc.classList.remove('hiden');
})

vlc.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	vlcDesc.classList.remove('hiden');
})

winrar.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.add('hiden');
	winrarDesc.classList.remove('hiden');
})

// open desc libs

microCoreXml.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	microCoreXmlDesc.classList.remove('hiden');
})

microVisualC.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	microVisualCDesc.classList.remove('hiden');
})

physX.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	physXDesc.classList.remove('hiden');
})

directX.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	directXDesc.classList.remove('hiden');
})

flashPlayer.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	flashPlayerDesc.classList.remove('hiden');
})

java.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	javaDesc.classList.remove('hiden');
})

microSilverlight.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	microSilverlightDesc.classList.remove('hiden');
})

microNetFraemwork.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	microNetFraemworkDesc.classList.remove('hiden');
})

openAl.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	openAlDesc.classList.remove('hiden');
})

runtimePack.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	runtimePackDesc.classList.remove('hiden');
})

unity.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.add('hiden');
	unityDesc.classList.remove('hiden');
})

// open desc drivers

driversLan.addEventListener('click', function(e) {
	e.preventDefault();
	wrapDrivers.classList.add('hiden');
	driversLanDesc.classList.remove('hiden');
})

driversAll.addEventListener('click', function(e) {
	e.preventDefault();
	wrapDrivers.classList.add('hiden');
	driversAllDesc.classList.remove('hiden');
})

//////////////////BTNBTNBTNBTNBTNBTN//////////////////////////

// btn close desc programs

ultraIsoDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	ultraIsoDesc.classList.add('hiden');
})

dToolsDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	dToolsDesc.classList.add('hiden');
})

neroDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	neroDesc.classList.add('hiden');
})

chromeDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	chromeDesc.classList.add('hiden');
})

firefoxDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	firefoxDesc.classList.add('hiden');
})

operaDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	operaDesc.classList.add('hiden');
})

sevenZDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	sevenZDesc.classList.add('hiden');
})

photoshopDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	photoshopDesc.classList.add('hiden');
})

aimpDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	aimpDesc.classList.add('hiden');
})

avastDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	avastDesc.classList.add('hiden');
})

fastStoneDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	fastStoneDesc.classList.add('hiden');
})

codecsDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	codecsDesc.classList.add('hiden');
})

mediaInfoDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	mediaInfoDesc.classList.add('hiden');
})

mOfficeDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	mOfficeDesc.classList.add('hiden');
})

qbittorrentDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	qbittorrentDesc.classList.add('hiden');
})

stduViewerDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	stduViewerDesc.classList.add('hiden');
})

totalCommanderDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	totalCommanderDesc.classList.add('hiden');
})

uninstallToolDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	uninstallToolDesc.classList.add('hiden');
})

unlockerDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	unlockerDesc.classList.add('hiden');
})

vlcDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	vlcDesc.classList.add('hiden');
})

winrarDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapPrograms.classList.remove('hiden');
	winrarDesc.classList.add('hiden');
})

// btn close desc libs

microCoreXmlDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	microCoreXmlDesc.classList.add('hiden');
})

microVisualCDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	microVisualCDesc.classList.add('hiden');
})

physXDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	physXDesc.classList.add('hiden');
})

directXDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	directXDesc.classList.add('hiden');
})

flashPlayerDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	flashPlayerDesc.classList.add('hiden');
})

javaDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	javaDesc.classList.add('hiden');
})

microSilverlightDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	microSilverlightDesc.classList.add('hiden');
})

microNetFraemworkDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	microNetFraemworkDesc.classList.add('hiden');
})

openAlDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	openAlDesc.classList.add('hiden');
})

runtimePackDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	runtimePackDesc.classList.add('hiden');
})

unityDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapLibs.classList.remove('hiden');
	unityDesc.classList.add('hiden');
})

// btn close desc drivers

driversLanDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapDrivers.classList.remove('hiden');
	driversLanDesc.classList.add('hiden');
})

driversAllDescBtn.addEventListener('click', function(e) {
	e.preventDefault();
	wrapDrivers.classList.remove('hiden');
	driversAllDesc.classList.add('hiden');
})


