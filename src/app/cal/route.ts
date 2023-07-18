import { google } from 'googleapis';
import keyFile from '../../../public/dgh0-392921-48ef7ad46393.json';

export async function GET(request: Request) {
   //return new Response('Hello world from Deno Deploy!');

   console.log('headers',request.headers);
    const GOOGLE_CALENDAR_ID = '97cf323203a7635c813c69e2e2b5467e94657a3e9900eb1245089fc76d658641@group.calendar.google.com';

    const jAuth = new google.auth.JWT(
        keyFile.client_email,
        undefined,
        keyFile.private_key,
        ['https://www.googleapis.com/auth/calendar.readonly']

    );

    const jCalendar = google.calendar({ version: 'v3', auth: jAuth });
    const res = jCalendar.events.list({
        calendarId: GOOGLE_CALENDAR_ID,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      }, (error, result) => {
        if (error) {
          return new Response (JSON.stringify({ error: error }));
        } else {
          if (result?.data?.items?.length) {
            return new Response(JSON.stringify({ events: result.data.items }));
          } else {
            return new Response(JSON.stringify({ message: 'No upcoming events found.' }));
          }
        }
      });
      
}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}