import { convertOAI2toOAI3 } from '../../openapi/conversion';
import { createPerFilePlugin, PipelinePlugin } from '../common';
import { IFileSystem } from '@azure-tools/datastore';

/* @internal */
export function createSwaggerToOpenApi3Plugin(fileSystem?: IFileSystem): PipelinePlugin {
  return createPerFilePlugin(async () => async (fileIn, sink) => {
    const fileOut = await convertOAI2toOAI3(fileIn, sink, fileSystem);
    return sink.Forward(fileIn.Description, fileOut);
  });
}
