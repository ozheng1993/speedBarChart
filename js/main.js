function onLoad()
{
	run()
}
frameCounter=0
function run()
{

        if(frameCounter%120==0)
        {
        	update()
        }
        
        frameCounter++
	console.log("test")
 	requestAnimationFrame(run)
}
