import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
} from '../ui/table';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';

const visitors = [
  {
    id: '1',
    country: {
      name: 'United States',
      flag: 'us',
    },
    states: '23 States',
    users: '3244 Users',
  },
  {
    id: '2',
    country: {
      name: 'Venezuela',
      flag: 've',
    },
    states: '23 States',
    users: '3244 Users',
  },
  {
    id: '3',
    country: {
      name: 'Salvador',
      flag: 'sv',
    },
    states: '23 States',
    users: '3244 Users',
  },
  {
    id: '4',
    country: {
      name: 'Russia',
      flag: 'ru',
    },
    states: '23 States',
    users: '3244 Users',
  },
  {
    id: '5',
    country: {
      name: 'Russia',
      flag: 'ru',
    },
    states: '23 States',
    users: '3244 Users',
  },
];

const VisitorsByCountries = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-darkBlueText">
          Visitors By Countries
        </h2>
        <p
          onClick={() => navigate(APP_ROUTES.COUNTRY_VISITORS)}
          className="cursor-pointer text-sm text-blue-600 transition-all hover:underline"
        >
          View All
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-normal text-sm font-medium text-mutedBlue">
                Country Name
              </TableHead>
              <TableHead className="whitespace-normal text-sm font-medium text-mutedBlue">
                States
              </TableHead>
              <TableHead className="whitespace-normal text-sm font-medium text-mutedBlue">
                Users
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visitors?.map((visitor, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flag-icon flag-icon-${visitor?.country?.flag?.toLocaleLowerCase()}`}
                      style={{
                        display: 'inline-block',
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        textAlign: 'center',
                        lineHeight: '2rem',
                        fontSize: '1.5rem',
                        backgroundSize: 'cover',
                      }}
                    />
                    <span className="text-xs font-semibold text-darkBlueText">
                      {visitor.country.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-medium text-darkBlueText">
                  {visitor.states}
                </TableCell>
                <TableCell className="text-xs font-medium text-darkBlueText">
                  {visitor.users}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VisitorsByCountries;
