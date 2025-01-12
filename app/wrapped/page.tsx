import GradientBackground from './components/GradientBackground';
import WrappedWriteup from './components/WrappedWriteup';
import getSpotifyWrapped from '../utils/createSpotifyWrapped';


export default async function WrappedPage() {
  const records = (await getWrapped())
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackground />
      <WrappedWriteup data={records} />
    </div>
  );
}

async function getWrapped() {
  //try catch if no user and default to blank map.
    const response = await getSpotifyWrapped();
    if(response !== null)
    {
      return response;
    }
    else
    {
      throw new Error("No records found");
    }

  }
