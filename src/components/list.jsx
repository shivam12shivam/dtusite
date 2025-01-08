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
      <Card className="w-full sm:w-1/3 md:w-1/3">
        <div className=" text-black font-bold bg-light-blue-100 h-9 items-center align-middle ">
            <h2 className=" pt-1">Web Resources</h2>
        </div>
        <List className="text-wrap overflow-hidden break-words">

            <a href="https://dtu.ac.in/Web/studentCorner/">
          <ListItem  >
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6 " variant="square" alt="candice" src="\images\1.jpg" />
            </ListItemPrefix>
            <div className="break-words overflow-hidden">
              <Typography variant="h6" color="blue-gray" className="text-lg sm:text-sm font-medium break-words">
              Student Corner
              </Typography>
              
            </div>
          </ListItem>
            </a>

            <a href="https://dtu.ac.in/Web/ERP/about/">
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="alexander" src="\images\2.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              ERP
              </Typography>
              
            </div>
          </ListItem>
            </a>

          <a href="http://library.dtu.ac.in/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\3.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Central Library
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=eds">


          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\4.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray" >
              Library Discovery Service
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://www.dtu.ac.in/Web/Facilities/ComputerCentre/about/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="/images/5.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Computer Centre
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://exam.dtu.ac.in/">

          <ListItem>
            <ListItemPrefix>
              <Avatar  className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="/images/6.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Examination & Result
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="https://iqac.dtu.ac.in/">
            
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\12.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              IQAC
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="https://dtu.ac.in/Web/eoc/about/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="/images/7.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Equal Opportunity Cell
              </Typography>
              
            </div>
          </ListItem>

          </a>

          <a href="http://dtu.ac.in/Web/coea/about/index.php">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\8.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Centre of Extension and Field
Outreach
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://dtu.ac.in/modules/hrdc/index.html">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\9.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              HRDC
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://dtutimes.dtu.ac.in/">
            
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\10.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              DTU Times
              </Typography>
              
            </div>
          </ListItem>
          </a>

          <a href="http://hostels.dtu.ac.in/">

          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-cover h-10 w-10 sm:h-6 sm:w-6" variant="square" alt="emma" src="\images\11.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Hostels
              </Typography>
              
            </div>
          </ListItem>
          </a>

        </List>
      </Card>
    );
  }