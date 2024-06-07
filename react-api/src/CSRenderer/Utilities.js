import {
	getRenderingEngineId,
	getToolGroupId,
	getViewportId
} from "./MainRenderer.js"

import { getRenderingEngine } from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools"

const { ToolGroupManager, ScaleOverlayTool } = cornerstoneTools;

export function rotateImage(angle) {
	const renderingEngine = getRenderingEngine(getRenderingEngineId());

	const viewport = renderingEngine.getViewport(getViewportId());

	viewport.setProperties({ rotation: angle });
  
	viewport.render();
  }

  export function toggleCrosshair(){
	let toolGroup = ToolGroupManager.getToolGroup(getToolGroupId());
	
	let state = toolGroup.getToolInstance(ScaleOverlayTool.toolName).mode;

	if (state === "Disabled"){
		toolGroup.setToolEnabled(ScaleOverlayTool.toolName)
	}else{
		toolGroup.setToolDisabled(ScaleOverlayTool.toolName)
	}
}