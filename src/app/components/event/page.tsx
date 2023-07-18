'use client';
import { Grid, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function Event(props: any) {
  console.log('props', props);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDate(props.event.date );
    setTitle(props.event.title );
    setLocation(props.event.location || 'Longmont');
    setTime(props.event.time );
    setDescription(props.event.description );
  }, [props]);
  return (
    <>
      <Grid.Container gap={4} css={{ padding: 0, margin: 0, height: 100 }}>
        <Grid xs={2} style={{ textAlign: 'center' }}>
          <Text
            className="event-date"
            color="blue"
            css={{ position: 'relative', top: -30 }}
          >
            {date}
          </Text>
        </Grid>

        <Grid xs={6}>
          <Grid.Container gap={0}>
            <Grid xs={12}>
              <Text
                span
                className="event-title"
                color="blue"
                transform="uppercase"
              >
                {title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                className="event-description"
                color="gray"
                span
                css={{ margin: 0, height: 25, position: 'relative', top: -25 }}
              >
                {description}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>

        <Grid xs={4}>
          <Grid.Container gap={0}>
            <Grid xs={12}>
              <Text className="event-title" color="blue" css={{ margin: 5 }}>
                {time}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                className="event-location"
                transform="uppercase"
                color="gray"
                css={{ margin: 0, height: 25, position: 'relative', top: -25 }}
              >
                {location}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
}
