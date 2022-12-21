"use strict";(self.webpackChunk_pixijs_ui=self.webpackChunk_pixijs_ui||[]).push([[909],{"./src/stories/checkbox/CheckBoxGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Graphics:()=>Graphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),_CheckBox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/CheckBox.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout.ts"),_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/argTypes.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={text:"Checkbox",textColor:"#FFFFFF",color:"#F1D583",borderColor:"#DCB000",fillBorderColor:"#FFFFFF",fillColor:"#A5E24D",width:50,height:50,radius:11,count:3,checked:!1,onPress:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Checkbox: ")},Graphics=function Graphics(_ref){var text=_ref.text,count=_ref.count,checked=_ref.checked,textColor=_ref.textColor,borderColor=_ref.borderColor,fillBorderColor=_ref.fillBorderColor,fillColor=_ref.fillColor,color=_ref.color,width=_ref.width,height=_ref.height,radius=_ref.radius,onPress=_ref.onPress,view=new _Layout__WEBPACK_IMPORTED_MODULE_2__.Ar({type:"vertical",elementsMargin:10});color=Number(color.replace("#","0x")),borderColor=Number(borderColor.replace("#","0x")),fillColor=Number(fillColor.replace("#","0x")),fillBorderColor=Number(fillBorderColor.replace("#","0x"));for(var _loop=function _loop(i){var checkBox=new _CheckBox__WEBPACK_IMPORTED_MODULE_3__.J({text:"".concat(text," ").concat(i+1),checked,style:{unchecked:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawRoundedRect(-2,-2,width+4,height+4,radius).beginFill(color).drawRoundedRect(0,0,width,height,radius),checked:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawRoundedRect(-2,-2,width+4,height+4,radius).beginFill(color).drawRoundedRect(0,0,width,height,radius).beginFill(fillBorderColor).drawRoundedRect(3,3,width-6,height-6,radius).beginFill(fillColor).drawRoundedRect(5,5,width-10,height-10,radius),text:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__.B),{},{fontSize:22,fill:textColor})}});checkBox.onChange.connect((function(){onPress("".concat(checkBox.checked))})),view.addChild(checkBox)},i=0;i<count;i++)_loop(i);return{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics as PixiGraphics } from 'pixi.js';\nimport { CheckBox } from '../../CheckBox';\nimport { action } from '@storybook/addon-actions';\nimport { Layout } from '../../Layout';\nimport { argTypes, getDefaultArgs } from '../../utils/helpers/argTypes';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { centerElement } from '../../utils/helpers/resize';\n\nconst args = {\n    text: 'Checkbox',\n    textColor: '#FFFFFF',\n    color: '#F1D583',\n    borderColor: '#DCB000',\n    fillBorderColor: '#FFFFFF',\n    fillColor: '#A5E24D',\n    width: 50,\n    height: 50,\n    radius: 11,\n    count: 3,\n    checked: false,\n    onPress: action('Checkbox: '),\n};\n\nexport const Graphics = ({\n    text,\n    count,\n    checked,\n\n    textColor,\n    borderColor,\n    fillBorderColor,\n    fillColor,\n    color,\n    width,\n    height,\n    radius,\n\n    onPress,\n}: any) => {\n    const view = new Layout({ type: 'vertical', elementsMargin: 10 });\n\n    color = Number(color.replace('#', '0x'));\n    borderColor = Number(borderColor.replace('#', '0x'));\n    fillColor = Number(fillColor.replace('#', '0x'));\n    fillBorderColor = Number(fillBorderColor.replace('#', '0x'));\n\n    for (let i = 0; i < count; i++) {\n        // Component usage !!!\n        const checkBox = new CheckBox({\n            text: `${text} ${i + 1}`,\n            checked,\n            style: {\n                unchecked: new PixiGraphics()\n                    .beginFill(borderColor)\n                    .drawRoundedRect(-2, -2, width + 4, height + 4, radius)\n                    .beginFill(color)\n                    .drawRoundedRect(0, 0, width, height, radius),\n                checked: new PixiGraphics()\n                    .beginFill(borderColor)\n                    .drawRoundedRect(-2, -2, width + 4, height + 4, radius)\n                    .beginFill(color)\n                    .drawRoundedRect(0, 0, width, height, radius)\n                    .beginFill(fillBorderColor)\n                    .drawRoundedRect(3, 3, width - 6, height - 6, radius)\n                    .beginFill(fillColor)\n                    .drawRoundedRect(5, 5, width - 10, height - 10, radius),\n                text: {\n                    ...defaultTextStyle,\n                    fontSize: 22,\n                    fill: textColor,\n                },\n            },\n        });\n\n        checkBox.onChange.connect(() => {\n            onPress(`${checkBox.checked}`);\n        });\n\n        view.addChild(checkBox);\n    }\n\n    return { view, resize: () => centerElement(view) };\n};\n\nexport default {\n    title: 'UI components/Checkbox/Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{graphics:{startLoc:{col:24,line:24},endLoc:{col:1,line:83},startBody:{col:24,line:24},endBody:{col:1,line:83}}}}},title:"UI components/Checkbox/Graphics",argTypes:(0,_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_6__.P)(args),args:(0,_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_6__.V)(args)};var __namedExportsOrder=["Graphics"]}}]);