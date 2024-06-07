import * as cornerstone from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools";
import initImageLoader from "./initRenderer";

export async function initCSAndTools() {
  initImageLoader();
  await cornerstone.init();
  cornerstoneTools.init();
}