import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
   
  export function Listfunc() {
    return (
      <Card className="md:w-96 h-[600px] md:h-full w-28 ">
        <div className=" text-black font-bold bg-light-blue-100 h-6 md:h-9 items-center align-middle ">
            <h2 className=" text-xxs pt-2 md:text-lg md:pt-1">Web Resources</h2>
        </div>
        <List className="text-wrap overflow break-words">

            <a href="https://dtu.ac.in/Web/studentCorner/">
          <ListItem  >
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4 " variant="square" alt="candice" src="\images\1.jpg" />
            </ListItemPrefix>
            <div className="break-words overflow-hidden">
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Student  Corner
              </Typography>
              
            </div>
          </ListItem>
            </a>

            <a href="https://dtu.ac.in/Web/ERP/about/">
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="alexander" src="\images\2.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              ERP
              </Typography>
              
            </div>
          </ListItem>
            </a>

          <a href="http://library.dtu.ac.in/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\3.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Central Library
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=eds">


          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\4.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words" >
              Library Discovery  <span className="block sm:hidden"></span>Service
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://www.dtu.ac.in/Web/Facilities/ComputerCentre/about/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="/images/5.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Computer <span className="block sm:hidden"></span> Centre
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://exam.dtu.ac.in/">

          <ListItem>
            <ListItemPrefix>
              <Avatar  className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="/images/6.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Examination<span className="block sm:hidden"></span> & Result
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="https://iqac.dtu.ac.in/">
            
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\12.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              IQAC
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="https://dtu.ac.in/Web/eoc/about/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="/images/7.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Equal <span className="block sm:hidden"></span>Opportunity<span className="block sm:hidden"></span> Cell
              </Typography>
              
            </div>
          </ListItem>

          </a>

          <a href="http://dtu.ac.in/Web/coea/about/index.php">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\8.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Centre of<span className="block sm:hidden"></span> Extension<span className="block sm:hidden"></span> and to<span className="block sm:hidden"></span>
Outreach
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://dtu.ac.in/modules/hrdc/index.html">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\9.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              HRDC
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://dtutimes.dtu.ac.in/">
            
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\10.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              DTU Times
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://hostels.dtu.ac.in/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill md:h-10 md:w-10 h-4 w-4" variant="square" alt="emma" src="\images\11.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" className="md:text-lg text-xxxxs font-extrabold break-words">
              Hostels
              </Typography>
              
            </div>
          </ListItem>
          </a>

        </List>
      </Card>
    );
  }