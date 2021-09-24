import React from 'react';
import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import { Cartesian3, createWorldTerrain } from "cesium";
import "./index.css";

function CesiumGlobe() {

  const terrainProvider = createWorldTerrain();
  const position = Cartesian3.fromDegrees(-97.733330, 30.266666, 100);
  return (

    <div className = "CesiumView">
    {/*}<Viewer style={{position: "absolute",top: 50,left: 50,right: 50,bottom: 50, backgroundColor: "#FF0000",}}/>*/}
      <Viewer full terrainProvider={terrainProvider}>
        <Entity position={position} name="Austin">
          <PointGraphics pixelSize={12} />
          <EntityDescription>
            <h1>Hello, world.</h1>
            <p>JSX is available here!</p>
          </EntityDescription>
        </Entity>
      </Viewer>
    </div>
  );
}

export default CesiumGlobe;
