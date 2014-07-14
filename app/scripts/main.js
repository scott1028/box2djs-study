'use strict';

var world = new Box2D.b2World(new Box2D.b2Vec2(0.0, -10.0));

var debugDraw = new Box2D.b2Draw();

Box2D.customizeVTable(debugDraw, [{
    original: Box2D.b2Draw.prototype.DrawSegment,
    replacement:
        function(thsPtr, vert1Ptr, vert2Ptr, colorPtr ) {
            setColorFromDebugDrawCallback( colorPtr );
            drawSegment( vert1Ptr, vert2Ptr );
        }
}]);

world.SetDebugDraw( debugDraw );
