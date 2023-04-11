"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[3410],{93410:function(e,t,n){n.d(t,{ot:function(){return B},$j:function(){return N},mh:function(){return Q},Jx:function(){return w},Pv:function(){return U},GI:function(){return O},jf:function(){return W},Hw:function(){return G},ZP:function(){return x}});var r=n(1413),o=n(29439),a=n(72791),i=a.createContext(null);var u=n(15671),s=n(43144);function l(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function c(e,t){var n=t.viewState||t,r=!1;if("longitude"in n&&"latitude"in n){var o=e.center;e.center=new o.constructor(n.longitude,n.latitude),r=r||o!==e.center}if("zoom"in n){var a=e.zoom;e.zoom=n.zoom,r=r||a!==e.zoom}if("bearing"in n){var i=e.bearing;e.bearing=n.bearing,r=r||i!==e.bearing}if("pitch"in n){var u=e.pitch;e.pitch=n.pitch,r=r||u!==e.pitch}return n.padding&&!e.isPaddingEqual(n.padding)&&(r=!0,e.padding=n.padding),r}var f=n(37762),d=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function p(e){if(!e)return null;if("string"===typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;var t,n={},o=(0,f.Z)(e.layers);try{for(o.s();!(t=o.n()).done;){var a=t.value;n[a.id]=a}}catch(u){o.e(u)}finally{o.f()}var i=e.layers.map((function(e){var t=n[e.ref],o=null;if("interactive"in e&&delete(o=(0,r.Z)({},e)).interactive,t){delete(o=o||(0,r.Z)({},e)).ref;var a,i=(0,f.Z)(d);try{for(i.s();!(a=i.n()).done;){var s=a.value;s in t&&(o[s]=t[s])}}catch(u){i.e(u)}finally{i.f()}}return o||e}));return(0,r.Z)((0,r.Z)({},e),{},{layers:i})}function m(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!m(e[n],t[n]))return!1;return!0}if(Array.isArray(t))return!1;if("object"===typeof e&&"object"===typeof t){var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var a=0,i=r;a<i.length;a++){var u=i[a];if(!t.hasOwnProperty(u))return!1;if(!m(e[u],t[u]))return!1}return!0}return!1}var v={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},h={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},y={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},g=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],_=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],E=function(){function e(t,n,r){var o=this;(0,u.Z)(this,e),this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=o.props[y[e.type]];t&&t(e)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||o._updateHover(e);var t=o.props[v[e.type]];if(t){if(o.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type){var n=o._hoveredFeatures||o._map.queryRenderedFeatures(e.point,{layers:o.props.interactiveLayerIds});e.features=n}t(e),delete e.features}},this._onCameraEvent=function(e){if(!o._internalUpdate){var t=o.props[h[e.type]];t&&t(e)}e.type in o._deferredEvents&&(o._deferredEvents[e.type]=!1)},this._MapClass=t,this.props=n,this._initialize(r)}return(0,s.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}},{key:"setProps",value:function(e){var t=this.props;this.props=e;var n=this._updateSettings(e,t);n&&this._createShadowTransform(this._map);var r=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(n||r||o&&!this._map.isMoving())&&this.redraw()}},{key:"_initialize",value:function(e){var t=this,n=this.props,o=(0,r.Z)((0,r.Z)((0,r.Z)({},n),n.initialViewState),{},{accessToken:n.mapboxAccessToken||P()||null,container:e,style:p(n.mapStyle)}),a=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[a.longitude||0,a.latitude||0],zoom:a.zoom||0,pitch:a.pitch||0,bearing:a.bearing||0}),n.gl){var i=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=i,n.gl}}var u=new this._MapClass(o);a.padding&&u.setPadding(a.padding),n.cursor&&(u.getCanvas().style.cursor=n.cursor),this._createShadowTransform(u);var s=u._render;u._render=function(e){t._inRender=!0,s.call(u,e),t._inRender=!1};var l=u._renderTaskQueue.run;u._renderTaskQueue.run=function(e){l.call(u._renderTaskQueue,e),t._onBeforeRepaint()},u.on("render",(function(){return t._onAfterRepaint()}));var c=u.fire;for(var f in u.fire=this._fireEvent.bind(this,c),u.on("resize",(function(){t._renderTransform.resize(u.transform.width,u.transform.height)})),u.on("styledata",(function(){return t._updateStyleComponents(t.props,{})})),u.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),v)u.on(f,this._onPointerEvent);for(var d in h)u.on(d,this._onCameraEvent);for(var m in y)u.on(m,this._onEvent);this._map=u}},{key:"recycle",value:function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null===t||void 0===t||t.remove(),e.savedMaps.push(this)}},{key:"destroy",value:function(){this._map.remove()}},{key:"redraw",value:function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}},{key:"_createShadowTransform",value:function(e){var t=function(e){var t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}},{key:"_updateSize",value:function(e){var t=e.viewState;if(t){var n=this._map;if(t.width!==n.transform.width||t.height!==n.transform.height)return n.resize(),!0}return!1}},{key:"_updateViewState",value:function(e,t){if(this._internalUpdate)return!1;var n=this._map,o=this._renderTransform,a=o.zoom,i=o.pitch,u=o.bearing,s=n.isMoving();s&&(o.cameraElevationReference="sea");var f=c(o,(0,r.Z)((0,r.Z)({},l(n.transform)),e));if(s&&(o.cameraElevationReference="ground"),f&&t){var d=this._deferredEvents;d.move=!0,d.zoom||(d.zoom=a!==o.zoom),d.rotate||(d.rotate=u!==o.bearing),d.pitch||(d.pitch=i!==o.pitch)}return s||c(n.transform,e),f}},{key:"_updateSettings",value:function(e,t){for(var n=this._map,r=!1,o=0,a=g;o<a.length;o++){var i=a[o];i in e&&!m(e[i],t[i])&&(r=!0,n["set".concat(i[0].toUpperCase()).concat(i.slice(1))](e[i]))}return r}},{key:"_updateStyle",value:function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var n={diff:e.styleDiffing};return"localIdeographFontFamily"in e&&(n.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(p(e.mapStyle),n),!0}return!1}},{key:"_updateStyleComponents",value:function(e,t){var n=this._map,r=!1;return n.style.loaded()&&("light"in e&&!m(e.light,t.light)&&(r=!0,n.setLight(e.light)),"fog"in e&&!m(e.fog,t.fog)&&(r=!0,n.setFog(e.fog)),"terrain"in e&&!m(e.terrain,t.terrain)&&(e.terrain&&!n.getSource(e.terrain.source)||(r=!0,n.setTerrain(e.terrain)))),r}},{key:"_updateHandlers",value:function(e,t){for(var n=this._map,r=!1,o=0,a=_;o<a.length;o++){var i=a[o],u=e[i];m(u,t[i])||(r=!0,u?n[i].enable(u):n[i].disable())}return r}},{key:"_updateHover",value:function(e){var t,n=this.props;if(n.interactiveLayerIds&&(n.onMouseMove||n.onMouseEnter||n.onMouseLeave)){var r,o=e.type,a=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0;if("mousemove"===o)try{r=this._map.queryRenderedFeatures(e.point,{layers:n.interactiveLayerIds})}catch(u){r=[]}else r=[];var i=r.length>0;!i&&a&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=r,i&&!a&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=o}else this._hoveredFeatures=null}},{key:"_fireEvent",value:function(e,t,n){var r=this._map,o=r.transform,a="string"===typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in h&&("object"===typeof t&&(t.viewState=l(o)),this._map.isMoving())?(r.transform=this._renderTransform,e.call(r,t,n),r.transform=o,r):(e.call(r,t,n),r)}},{key:"_onBeforeRepaint",value:function(){var e=this,t=this._map;for(var n in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[n]&&t.fire(n);this._internalUpdate=!1;var r=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){e._map.transform=r}}}],[{key:"reuse",value:function(t,n){var o=e.savedMaps.pop();if(!o)return null;var a=o.map,i=a.getContainer();for(n.className=i.className;i.childNodes.length>0;)n.appendChild(i.childNodes[0]);a._container=n,o.setProps((0,r.Z)((0,r.Z)({},t),{},{styleDiffing:!1})),a.resize();var u=t.initialViewState;return u&&(u.bounds?a.fitBounds(u.bounds,(0,r.Z)((0,r.Z)({},u.fitBoundsOptions),{},{duration:0})):o._updateViewState(u,!1)),a.isStyleLoaded()?a.fire("load"):a.once("styledata",(function(){return a.fire("load")})),o}}]),e}();function P(){var e=null;if("undefined"!==typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBSEx2-ykPTb70keLZh3LAuDtQT2VyCsco",REACT_APP_FIREBASE_APPID:"1:599725599274:web:8f9a716ca577fc72a1f153",REACT_APP_FIREBASE_AUTH_DOMAIN:"evencloud-26d32.firebaseapp.com",REACT_APP_FIREBASE_DB_URL:"https://evencloud-26d32.firebaseio.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-VSJNQ5LYK5",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"599725599274",REACT_APP_FIREBASE_PROJECT_ID:"evencloud-26d32",REACT_APP_FIREBASE_STORAGE_BUCKET:"gs://evencloud-26d32.appspot.com",REACT_APP_OPENAI_API_KEY:"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"}.MapboxAccessToken}catch(n){}try{e=e||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBSEx2-ykPTb70keLZh3LAuDtQT2VyCsco",REACT_APP_FIREBASE_APPID:"1:599725599274:web:8f9a716ca577fc72a1f153",REACT_APP_FIREBASE_AUTH_DOMAIN:"evencloud-26d32.firebaseapp.com",REACT_APP_FIREBASE_DB_URL:"https://evencloud-26d32.firebaseio.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-VSJNQ5LYK5",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"599725599274",REACT_APP_FIREBASE_PROJECT_ID:"evencloud-26d32",REACT_APP_FIREBASE_STORAGE_BUCKET:"gs://evencloud-26d32.appspot.com",REACT_APP_OPENAI_API_KEY:"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"}.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(r){}return e}E.savedMaps=[];var S=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function A(e,t){if(!e)return null;var n,r=e.map,o={getMap:function(){return r},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(n){return e.transform.locationPoint(t.LngLat.convert(n))},unproject:function(n){return e.transform.pointLocation(t.Point.convert(n))},queryTerrainElevation:function(t,n){var o=r.transform;r.transform=e.transform;var a=r.queryTerrainElevation(t,n);return r.transform=o,a}},a=(0,f.Z)(function(e){var t=new Set,n=e;for(;n;){var r,o=(0,f.Z)(Object.getOwnPropertyNames(n));try{for(o.s();!(r=o.n()).done;){var a=r.value;"_"!==a[0]&&"function"===typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}}catch(i){o.e(i)}finally{o.f()}n=Object.getPrototypeOf(n)}return Array.from(t)}(r));try{for(a.s();!(n=a.n()).done;){var i=n.value;i in o||S.includes(i)||(o[i]=r[i].bind(r))}}catch(u){a.e(u)}finally{a.f()}return o}var C="undefined"!==typeof document?a.useLayoutEffect:a.useEffect,R=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var T=a.createContext(null),L={minZoom:0,maxZoom:22,minPitch:0,maxPitch:60,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:function(e){return console.error(e.error)},RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},b=(0,a.forwardRef)((function(e,t){var u=(0,a.useContext)(i),s=(0,a.useState)(null),l=(0,o.Z)(s,2),c=l[0],d=l[1],p=(0,a.useRef)(),m=(0,a.useRef)({mapLib:null,map:null}).current;(0,a.useEffect)((function(){var t,r=e.mapLib,o=!0;return Promise.resolve(r||Promise.resolve().then(n.t.bind(n,5483,23))).then((function(n){if(o){if(n.Map||(n=n.default),!n||!n.Map)throw new Error("Invalid mapLib");if(!n.supported(e))throw new Error("Map is not supported by this browser");!function(e,t){var n,r=(0,f.Z)(R);try{for(r.s();!(n=r.n()).done;){var o=n.value;o in t&&(e[o]=t[o])}}catch(a){r.e(a)}finally{r.f()}t.RTLTextPlugin&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(t.RTLTextPlugin,(function(e){e&&console.error(e)}),!1)}(n,e),e.reuseMaps&&(t=E.reuse(e,p.current)),t||(t=new E(n.Map,e,p.current)),m.map=A(t,n),m.mapLib=n,d(t),null===u||void 0===u||u.onMapMount(m.map,e.id)}})).catch((function(t){e.onError({type:"error",target:null,originalEvent:null,error:t})})),function(){o=!1,t&&(null===u||void 0===u||u.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),C((function(){c&&c.setProps(e)})),(0,a.useImperativeHandle)(t,(function(){return m.map}),[c]);var v=(0,a.useMemo)((function(){return(0,r.Z)({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return a.createElement("div",{id:e.id,ref:p,style:v},c&&a.createElement(T.Provider,{value:m},a.createElement("div",{"mapboxgl-children":""},e.children)))}));b.displayName="Map",b.defaultProps=L;var x=b,M=n(54164),Z=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function I(e,t){if(e&&t){var n=e.style;for(var r in t){var o=t[r];Number.isFinite(o)&&!Z.test(r)?n[r]="".concat(o,"px"):n[r]=o}}}function k(e){var t=(0,a.useContext)(T),n=t.map,o=t.mapLib,i=(0,a.useRef)({props:e});i.current.props=e;var u=(0,a.useMemo)((function(){var t=!1;a.Children.forEach(e.children,(function(e){e&&(t=!0)}));var n=(0,r.Z)((0,r.Z)({},e),{},{element:t?document.createElement("div"):null}),s=new o.Marker(n).setLngLat([e.longitude,e.latitude]);return s.getElement().addEventListener("click",(function(e){var t,n;null===(n=(t=i.current.props).onClick)||void 0===n||n.call(t,{type:"click",target:s,originalEvent:e})})),s.on("dragstart",(function(e){var t,n,r=e;r.lngLat=u.getLngLat(),null===(n=(t=i.current.props).onDragStart)||void 0===n||n.call(t,r)})),s.on("drag",(function(e){var t,n,r=e;r.lngLat=u.getLngLat(),null===(n=(t=i.current.props).onDrag)||void 0===n||n.call(t,r)})),s.on("dragend",(function(e){var t,n,r=e;r.lngLat=u.getLngLat(),null===(n=(t=i.current.props).onDragEnd)||void 0===n||n.call(t,r)})),s}),[]);return(0,a.useEffect)((function(){return u.addTo(n.getMap()),function(){u.remove()}}),[]),(0,a.useEffect)((function(){I(u.getElement(),e.style)}),[e.style]),u.getLngLat().lng===e.longitude&&u.getLngLat().lat===e.latitude||u.setLngLat([e.longitude,e.latitude]),e.offset&&!function(e,t){var n=Array.isArray(e)?e[0]:e?e.x:0,r=Array.isArray(e)?e[1]:e?e.y:0,o=Array.isArray(t)?t[0]:t?t.x:0,a=Array.isArray(t)?t[1]:t?t.y:0;return n===o&&r===a}(u.getOffset(),e.offset)&&u.setOffset(e.offset),u.isDraggable()!==e.draggable&&u.setDraggable(e.draggable),u.getRotation()!==e.rotation&&u.setRotation(e.rotation),u.getRotationAlignment()!==e.rotationAlignment&&u.setRotationAlignment(e.rotationAlignment),u.getPitchAlignment()!==e.pitchAlignment&&u.setPitchAlignment(e.pitchAlignment),u.getPopup()!==e.popup&&u.setPopup(e.popup),(0,M.createPortal)(e.children,u.getElement())}k.defaultProps={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"};var w=a.memo(k);function D(e){return new Set(e?e.trim().split(/\s+/):[])}var O=a.memo((function(e){var t=(0,a.useContext)(T),n=t.map,o=t.mapLib,i=(0,a.useMemo)((function(){return document.createElement("div")}),[]),u=(0,a.useRef)({props:e});u.current.props=e;var s=(0,a.useMemo)((function(){var t=(0,r.Z)({},e),n=new o.Popup(t).setLngLat([e.longitude,e.latitude]);return n.once("open",(function(e){var t,n;null===(n=(t=u.current.props).onOpen)||void 0===n||n.call(t,e)})),n}),[]);if((0,a.useEffect)((function(){var e=function(e){var t,n;null===(n=(t=u.current.props).onClose)||void 0===n||n.call(t,e)};return s.on("close",e),s.setDOMContent(i).addTo(n.getMap()),function(){s.off("close",e),s.isOpen()&&s.remove()}}),[]),(0,a.useEffect)((function(){I(s.getElement(),e.style)}),[e.style]),s.isOpen()&&(s.getLngLat().lng===e.longitude&&s.getLngLat().lat===e.latitude||s.setLngLat([e.longitude,e.latitude]),e.offset&&!m(s.options.offset,e.offset)&&s.setOffset(e.offset),s.options.anchor===e.anchor&&s.options.maxWidth===e.maxWidth||(s.options.anchor=e.anchor,s.setMaxWidth(e.maxWidth)),s.options.className!==e.className)){var l,c=D(s.options.className),d=D(e.className),p=(0,f.Z)(c);try{for(p.s();!(l=p.n()).done;){var v=l.value;d.has(v)||s.removeClassName(v)}}catch(_){p.e(_)}finally{p.f()}var h,y=(0,f.Z)(d);try{for(y.s();!(h=y.n()).done;){var g=h.value;c.has(g)||s.addClassName(g)}}catch(_){y.e(_)}finally{y.f()}s.options.className=e.className}return(0,M.createPortal)(e.children,i)}));var z=function(e,t,n,r){var o=(0,a.useContext)(T),i=(0,a.useMemo)((function(){return e(o)}),[]);return(0,a.useEffect)((function(){var e=r||n||t,a="function"===typeof t&&"function"===typeof n?t:null,u="function"===typeof n?n:"function"===typeof t?t:null,s=o.map;return s.hasControl(i)||(s.addControl(i,null===e||void 0===e?void 0:e.position),a&&a(o)),function(){u&&u(o),s.hasControl(i)&&s.removeControl(i)}}),[]),i};a.memo((function(e){var t=z((function(t){return new t.mapLib.AttributionControl(e)}),{position:e.position});return(0,a.useEffect)((function(){I(t._container,e.style)}),[e.style]),null}));var B=a.memo((function(e){var t=z((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,a.useEffect)((function(){I(t._controlContainer,e.style)}),[e.style]),null})),F=(0,a.forwardRef)((function(e,t){var n=(0,a.useRef)({props:e}),r=z((function(t){var r=new t.mapLib.GeolocateControl(e),o=r._setupUI;return r._setupUI=function(e){r._container.hasChildNodes()||o(e)},r.on("geolocate",(function(e){var t,r;null===(r=(t=n.current.props).onGeolocate)||void 0===r||r.call(t,e)})),r.on("error",(function(e){var t,r;null===(r=(t=n.current.props).onError)||void 0===r||r.call(t,e)})),r.on("outofmaxbounds",(function(e){var t,r;null===(r=(t=n.current.props).onOutOfMaxBounds)||void 0===r||r.call(t,e)})),r.on("trackuserlocationstart",(function(e){var t,r;null===(r=(t=n.current.props).onTrackUserLocationStart)||void 0===r||r.call(t,e)})),r.on("trackuserlocationend",(function(e){var t,r;null===(r=(t=n.current.props).onTrackUserLocationEnd)||void 0===r||r.call(t,e)})),r}),{position:e.position});return n.current.props=e,(0,a.useImperativeHandle)(t,(function(){return{trigger:function(){return r.trigger()}}}),[]),(0,a.useEffect)((function(){I(r._container,e.style)}),[e.style]),null}));F.displayName="GeolocateControl";var N=a.memo(F);var U=a.memo((function(e){var t=z((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,a.useEffect)((function(){I(t._container,e.style)}),[e.style]),null}));function j(e){var t=z((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position});return t.options.unit===e.unit&&t.options.maxWidth===e.maxWidth||(t.options.maxWidth=e.maxWidth,t.setUnit(e.unit)),(0,a.useEffect)((function(){I(t._container,e.style)}),[e.style]),null}j.defaultProps={unit:"metric",maxWidth:100};var W=a.memo(j);function H(e,t){if(!e)throw new Error(t)}var K=0;var G=function(e){var t=(0,a.useContext)(T).map.getMap(),n=(0,a.useRef)(e),i=(0,a.useState)(0),u=(0,o.Z)(i,2)[1],s=(0,a.useMemo)((function(){return e.id||"jsx-source-".concat(K++)}),[]);(0,a.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return u((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){var n;if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(s)){var r=null===(n=t.getStyle())||void 0===n?void 0:n.layers;if(r){var o,a=(0,f.Z)(r);try{for(a.s();!(o=a.n()).done;){var i=o.value;i.source===s&&t.removeLayer(i.id)}}catch(u){a.e(u)}finally{a.f()}}t.removeSource(s)}}}}),[t]);var l=t&&t.style&&t.getSource(s);return l?function(e,t,n){H(t.id===n.id,"source id changed"),H(t.type===n.type,"source type changed");var r="",o=0;for(var a in t)"children"===a||"id"===a||m(n[a],t[a])||(r=a,o++);if(o){var i=t.type;if("geojson"===i)e.setData(t.data);else if("image"===i)e.updateImage({url:t.url,coordinates:t.coordinates});else if("canvas"!==i&&"video"!==i||1!==o||"coordinates"!==r)if("vector"===i&&"setUrl"in e)switch(r){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: ".concat(r));else e.setCoordinates(t.coordinates)}}(l,e,n.current):l=function(e,t,n){if(e.style&&e.style._loaded){var o=(0,r.Z)({},n);return delete o.id,delete o.children,e.addSource(t,o),e.getSource(t)}return null}(t,s,e),n.current=e,l&&a.Children.map(e.children,(function(e){return e&&(0,a.cloneElement)(e,{source:s})}))||null};var V=0;var Q=function(e){var t=(0,a.useContext)(T).map.getMap(),n=(0,a.useRef)(e),i=(0,a.useState)(0),u=(0,o.Z)(i,2)[1],s=(0,a.useMemo)((function(){return e.id||"jsx-layer-".concat(V++)}),[]);if((0,a.useEffect)((function(){if(t){var e=function(){return u((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(s)&&t.removeLayer(s)}}}),[t]),t&&t.style&&t.getLayer(s))try{!function(e,t,n,r){if(H(n.id===r.id,"layer id changed"),H(n.type===r.type,"layer type changed"),"custom"!==n.type&&"custom"!==r.type){var o=n.layout,a=void 0===o?{}:o,i=n.paint,u=void 0===i?{}:i,s=n.filter,l=n.minzoom,c=n.maxzoom,f=n.beforeId;if(f!==r.beforeId&&e.moveLayer(t,f),a!==r.layout){var d=r.layout||{};for(var p in a)m(a[p],d[p])||e.setLayoutProperty(t,p,a[p]);for(var v in d)a.hasOwnProperty(v)||e.setLayoutProperty(t,v,void 0)}if(u!==r.paint){var h=r.paint||{};for(var y in u)m(u[y],h[y])||e.setPaintProperty(t,y,u[y]);for(var g in h)u.hasOwnProperty(g)||e.setPaintProperty(t,g,void 0)}m(s,r.filter)||e.setFilter(t,s),l===r.minzoom&&c===r.maxzoom||e.setLayerZoomRange(t,l,c)}}(t,s,e,n.current)}catch(l){console.warn(l)}else!function(e,t,n){if(e.style&&e.style._loaded&&(!("source"in n)||e.getSource(n.source))){var o=(0,r.Z)((0,r.Z)({},n),{},{id:t});delete o.beforeId,e.addLayer(o,n.beforeId)}}(t,s,e);return n.current=e,null}}}]);
//# sourceMappingURL=3410.d5d5cf3d.chunk.js.map