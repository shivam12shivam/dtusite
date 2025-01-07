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
      <Card className="w-80 h-full">
        <div className=" text-black font-bold bg-light-blue-100 h-9 items-center align-middle ">
            <h2 className=" pt-1">Web Resources</h2>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="candice" src="\src\images\1.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Student Corner
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="alexander" src="\src\images\2.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              ERP
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="src\images\3.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Central Library
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="src\images\4.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Library Discovery Service
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="/src/images/5.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Computer Centre
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar  className="object-fill" variant="square" alt="emma" src="src/images/6.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Examination & Result
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="\src\images\12.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              IQAC
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="src/images/7.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Equal Opportunity Cell
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="src\images\8.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Centre of Extension and Field
Outreach
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="src\images\9.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              HRDC
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="\src\images\10.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              DTU Times
              </Typography>
              
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar className="object-fill" variant="square" alt="emma" src="\src\images\11.png" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              Hostels
              </Typography>
              
            </div>
          </ListItem>

        </List>
      </Card>
    );
  }