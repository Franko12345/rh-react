import { RenderingEngine, Enums } from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools"

const {
	ZoomTool,
	ToolGroupManager,
	ScaleOverlayTool,
	Enums: csToolsEnums,
} = cornerstoneTools;

const { MouseBindings } = csToolsEnums;
const toolGroupId = 'STACK_TOOL_GROUP_ID';
const renderingEngineId = "myRenderingEngine";  
const viewportId = "CT_AXIAL_STACK";


export function renderImage() {
	
	cornerstoneTools.addTool(ZoomTool);
	cornerstoneTools.addTool(ScaleOverlayTool);
	
	let toolGroup = ToolGroupManager.createToolGroup(toolGroupId);
	
	toolGroup.addTool(ZoomTool.toolName);
	toolGroup.addTool(ScaleOverlayTool.toolName);
	
	toolGroup.setToolActive(ZoomTool.toolName,  {
		bindings: [
		  {mouseButton: MouseBindings.Secondary},
			],
	  });

	toolGroup.setToolConfiguration(ScaleOverlayTool.toolName,
		{
		  scaleLocation: "left",
		},
		true
	);

	toolGroup.setToolActive(ScaleOverlayTool.toolName);
	
	
	const element = document.getElementById("dicomViewer");
	const { ViewportType } = Enums;
	
	const renderingEngine = new RenderingEngine(renderingEngineId);
	
	const viewportInput = {
		viewportId,
		element,
		type: ViewportType.STACK,
	};
	
	toolGroup.addViewport(viewportId, renderingEngineId);
		
	renderingEngine.enableElement(viewportInput);
	
	const viewport = renderingEngine.getViewport(viewportInput.viewportId);
	
	viewport.setStack(["wadouri:http://localhost:9999"]);
	
	viewport.render();
  }
  
  export function getViewportId(){return viewportId}
  export function getToolGroupId(){return toolGroupId}
  export function getRenderingEngineId(){return renderingEngineId}