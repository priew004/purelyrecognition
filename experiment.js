// Define the experiment trials
const experimentTrials = [
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'truck',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000356478.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000356478.png',
        source: 'clock',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000581726.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000581726.png',
        source: 'bench',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000065628.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000065628.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000205103.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000205103.png',
        source: 'cake',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000295076.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000295076.png',
        source: 'toilet',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'cake',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000249909.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000249909.png',
        source: 'toilet',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000370749.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000370749.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000451648.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000451648.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000164372.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000164372.png',
        source: 'giraffe',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000471184.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000471184.png',
        source: 'cake',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000453138.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000453138.png',
        source: 'truck',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000131531.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000131531.png',
        source: 'giraffe',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'clock',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000561208_OCCLUDED_BY_COCO_val2014_000000278601.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000561208_OCCLUDED_BY_COCO_val2014_000000278601.png',
        source: 'giraffe',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000569415.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000569415.png',
        source: 'cake',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000246512.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000246512.png',
        source: 'clock',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000251936.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000251936.png',
        source: 'clock',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'clock',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000246540.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000246540.png',
        source: 'truck',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000135670.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000135670.png',
        source: 'clock',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000203317_OCCLUDED_BY_COCO_val2014_000000132389.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000203317_OCCLUDED_BY_COCO_val2014_000000132389.png',
        source: 'bicycle',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000104619.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000104619.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000099543.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000099543.png',
        source: 'bicycle',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000246512.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000246512.png',
        source: 'toilet',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000420313.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000420313.png',
        source: 'truck',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000110759.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000110759.png',
        source: 'cake',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000131159.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000131159.png',
        source: 'truck',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000561208_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000561208_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'giraffe',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000255134_OCCLUDED_BY_COCO_val2014_000000456865.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000255134_OCCLUDED_BY_COCO_val2014_000000456865.png',
        source: 'dog',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000069698.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000069698.png',
        source: 'truck',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000164363.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000164363.png',
        source: 'cat',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'pizza',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000205647.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000205647.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000561208.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000561208.png',
        source: 'toilet',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'truck',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000499835_OCCLUDED_BY_COCO_val2014_000000279305.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000499835_OCCLUDED_BY_COCO_val2014_000000279305.png',
        source: 'truck',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000426247.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000426247.png',
        source: 'toilet',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000205647.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000205647.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000327777_OCCLUDED_BY_COCO_val2014_000000029346.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000327777_OCCLUDED_BY_COCO_val2014_000000029346.png',
        source: 'pizza',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'giraffe',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000532571.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000532571.png',
        source: 'truck',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'truck',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000221666.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000221666.png',
        source: 'truck',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532285_OCCLUDED_BY_COCO_val2014_000000139436.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532285_OCCLUDED_BY_COCO_val2014_000000139436.png',
        source: 'bicycle',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000323709.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000323709.png',
        source: 'clock',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000315864_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000315864_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'cake',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000315864.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000315864.png',
        source: 'bicycle',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000110759.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000110759.png',
        source: 'toilet',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000389128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000389128.png',
        source: 'cat',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'pizza',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000099543.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000099543.png',
        source: 'bicycle',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'bicycle',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000041257.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000041257.png',
        source: 'bicycle',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000272416.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000272416.png',
        source: 'cake',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'clock',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000131159.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000131159.png',
        source: 'pizza',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000132389.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000132389.png',
        source: 'clock',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000104619.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000104619.png',
        source: 'clock',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242287_OCCLUDED_BY_COCO_val2014_000000249909.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242287_OCCLUDED_BY_COCO_val2014_000000249909.png',
        source: 'bicycle',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000132389_OCCLUDED_BY_COCO_val2014_000000189772.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000132389_OCCLUDED_BY_COCO_val2014_000000189772.png',
        source: 'dog',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000090367.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000090367.png',
        source: 'truck',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000029346.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000029346.png',
        source: 'pizza',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000139436.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000139436.png',
        source: 'bench',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000451501.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000204930_OCCLUDED_BY_COCO_val2014_000000451501.png',
        source: 'giraffe',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000436315.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000436315.png',
        source: 'truck',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000471184.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000471184.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000499835_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000499835_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'truck',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000540782.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000540782.png',
        source: 'bicycle',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000242287.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000242287.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000278601_OCCLUDED_BY_COCO_val2014_000000168129.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000278601_OCCLUDED_BY_COCO_val2014_000000168129.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'toilet',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000451648_OCCLUDED_BY_COCO_val2014_000000320020.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000451648_OCCLUDED_BY_COCO_val2014_000000320020.png',
        source: 'truck',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000320020.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000320020.png',
        source: 'clock',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000483348_OCCLUDED_BY_COCO_val2014_000000295076.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000483348_OCCLUDED_BY_COCO_val2014_000000295076.png',
        source: 'toilet',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000356478.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000356478.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'clock',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000082327.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000082327.png',
        source: 'truck',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000581726.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000581726.png',
        source: 'clock',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000561208.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000561208.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000278601_OCCLUDED_BY_COCO_val2014_000000555023.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000278601_OCCLUDED_BY_COCO_val2014_000000555023.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000532285.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000532285.png',
        source: 'clock',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000471184.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000471184.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'bench',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000262347.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000262347.png',
        source: 'truck',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000041257_OCCLUDED_BY_COCO_val2014_000000189772.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000041257_OCCLUDED_BY_COCO_val2014_000000189772.png',
        source: 'cat',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000569415.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000569415.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000242287.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000242287.png',
        source: 'truck',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000581726.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000581726.png',
        source: 'clock',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000249909.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000249909.png',
        source: 'bench',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000427041.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000427041.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000132389.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000132389.png',
        source: 'pizza',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'clock',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000132389.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000132389.png',
        source: 'bench',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'toilet',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'cake',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'toilet',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000295270_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000295270_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'bench',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000237735_OCCLUDED_BY_COCO_val2014_000000434576.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000237735_OCCLUDED_BY_COCO_val2014_000000434576.png',
        source: 'airplane',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000240918_OCCLUDED_BY_COCO_val2014_000000532571.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000240918_OCCLUDED_BY_COCO_val2014_000000532571.png',
        source: 'bicycle',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000099543_OCCLUDED_BY_COCO_val2014_000000453138.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000099543_OCCLUDED_BY_COCO_val2014_000000453138.png',
        source: 'dog',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000110630_OCCLUDED_BY_COCO_val2014_000000451648.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000110630_OCCLUDED_BY_COCO_val2014_000000451648.png',
        source: 'pizza',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000090367_OCCLUDED_BY_COCO_val2014_000000188447.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000090367_OCCLUDED_BY_COCO_val2014_000000188447.png',
        source: 'dog',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000336302_OCCLUDED_BY_COCO_val2014_000000205647.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000336302_OCCLUDED_BY_COCO_val2014_000000205647.png',
        source: 'cat',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000487461_OCCLUDED_BY_COCO_val2014_000000552977.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000487461_OCCLUDED_BY_COCO_val2014_000000552977.png',
        source: 'bear',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000295076_OCCLUDED_BY_COCO_val2014_000000082327.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000295076_OCCLUDED_BY_COCO_val2014_000000082327.png',
        source: 'airplane',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000320020_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000320020_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'dog',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000140010.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000140010.png',
        source: 'dog',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000459136_OCCLUDED_BY_COCO_val2014_000000205647.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000459136_OCCLUDED_BY_COCO_val2014_000000205647.png',
        source: 'bench',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000325664_OCCLUDED_BY_COCO_val2014_000000164363.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000325664_OCCLUDED_BY_COCO_val2014_000000164363.png',
        source: 'bear',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000399400_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000399400_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'airplane',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000255134_OCCLUDED_BY_COCO_val2014_000000164363.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000255134_OCCLUDED_BY_COCO_val2014_000000164363.png',
        source: 'dog',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000454693_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000454693_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'giraffe',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000426247_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000426247_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'dog',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000020536_OCCLUDED_BY_COCO_val2014_000000434576.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000020536_OCCLUDED_BY_COCO_val2014_000000434576.png',
        source: 'toilet',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000262347_OCCLUDED_BY_COCO_val2014_000000240918.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000262347_OCCLUDED_BY_COCO_val2014_000000240918.png',
        source: 'bench',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000581655_OCCLUDED_BY_COCO_val2014_000000065628.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000581655_OCCLUDED_BY_COCO_val2014_000000065628.png',
        source: 'pizza',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000099543_OCCLUDED_BY_COCO_val2014_000000110759.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000099543_OCCLUDED_BY_COCO_val2014_000000110759.png',
        source: 'dog',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000334140_OCCLUDED_BY_COCO_val2014_000000426247.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000334140_OCCLUDED_BY_COCO_val2014_000000426247.png',
        source: 'bicycle',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000451501_OCCLUDED_BY_COCO_val2014_000000104619.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000451501_OCCLUDED_BY_COCO_val2014_000000104619.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000417957_OCCLUDED_BY_COCO_val2014_000000558073.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000417957_OCCLUDED_BY_COCO_val2014_000000558073.png',
        source: 'bench',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000237597.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000237597.png',
        source: 'dog',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000237597_OCCLUDED_BY_COCO_val2014_000000272416.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000237597_OCCLUDED_BY_COCO_val2014_000000272416.png',
        source: 'elephant',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000427041_OCCLUDED_BY_COCO_val2014_000000356478.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000427041_OCCLUDED_BY_COCO_val2014_000000356478.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000569415_OCCLUDED_BY_COCO_val2014_000000420313.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000569415_OCCLUDED_BY_COCO_val2014_000000420313.png',
        source: 'elephant',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000450849.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000450849.png',
        source: 'pizza',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000197528_OCCLUDED_BY_COCO_val2014_000000451648.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000197528_OCCLUDED_BY_COCO_val2014_000000451648.png',
        source: 'cat',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000558073.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000558073.png',
        source: 'dog',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'toilet',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000524392_OCCLUDED_BY_COCO_val2014_000000132389.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000524392_OCCLUDED_BY_COCO_val2014_000000132389.png',
        source: 'refrigerator',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000436315.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000436315.png',
        source: 'cake',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000238377_OCCLUDED_BY_COCO_val2014_000000483348.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000238377_OCCLUDED_BY_COCO_val2014_000000483348.png',
        source: 'dog',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000075786_OCCLUDED_BY_COCO_val2014_000000370749.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000075786_OCCLUDED_BY_COCO_val2014_000000370749.png',
        source: 'bear',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000131531.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000131531.png',
        source: 'toilet',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000532285.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000532285.png',
        source: 'pizza',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000043128_OCCLUDED_BY_COCO_val2014_000000131159.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000043128_OCCLUDED_BY_COCO_val2014_000000131159.png',
        source: 'elephant',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000393995.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000393995.png',
        source: 'dog',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000020536_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000020536_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000524392_OCCLUDED_BY_COCO_val2014_000000471184.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000524392_OCCLUDED_BY_COCO_val2014_000000471184.png',
        source: 'refrigerator',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000242379.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000242379.png',
        source: 'dog',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000370749.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000370749.png',
        source: 'cat',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000417957_OCCLUDED_BY_COCO_val2014_000000370749.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000417957_OCCLUDED_BY_COCO_val2014_000000370749.png',
        source: 'bench',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000240918_OCCLUDED_BY_COCO_val2014_000000205103.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000240918_OCCLUDED_BY_COCO_val2014_000000205103.png',
        source: 'bicycle',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000453138_OCCLUDED_BY_COCO_val2014_000000279305.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000453138_OCCLUDED_BY_COCO_val2014_000000279305.png',
        source: 'bicycle',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000025430_OCCLUDED_BY_COCO_val2014_000000315864.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000025430_OCCLUDED_BY_COCO_val2014_000000315864.png',
        source: 'bench',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000323709_OCCLUDED_BY_COCO_val2014_000000389128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000323709_OCCLUDED_BY_COCO_val2014_000000389128.png',
        source: 'airplane',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000532571.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000532571.png',
        source: 'dog',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000561208.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000561208.png',
        source: 'truck',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000238377_OCCLUDED_BY_COCO_val2014_000000532285.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000238377_OCCLUDED_BY_COCO_val2014_000000532285.png',
        source: 'dog',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000140010.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000140010.png',
        source: 'bicycle',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000204930.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246512_OCCLUDED_BY_COCO_val2014_000000204930.png',
        source: 'dog',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000032952_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000032952_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'elephant',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540789_OCCLUDED_BY_COCO_val2014_000000389128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540789_OCCLUDED_BY_COCO_val2014_000000389128.png',
        source: 'clock',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000471184.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000471184.png',
        source: 'bicycle',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000188447_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000188447_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'pizza',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000420313_OCCLUDED_BY_COCO_val2014_000000376996.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000420313_OCCLUDED_BY_COCO_val2014_000000376996.png',
        source: 'cake',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000460927_OCCLUDED_BY_COCO_val2014_000000242287.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000460927_OCCLUDED_BY_COCO_val2014_000000242287.png',
        source: 'bear',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000274653.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000274653.png',
        source: 'elephant',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000180411_OCCLUDED_BY_COCO_val2014_000000065628.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000180411_OCCLUDED_BY_COCO_val2014_000000065628.png',
        source: 'airplane',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000524392_OCCLUDED_BY_COCO_val2014_000000483348.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000524392_OCCLUDED_BY_COCO_val2014_000000483348.png',
        source: 'refrigerator',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000094355_OCCLUDED_BY_COCO_val2014_000000156466.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000094355_OCCLUDED_BY_COCO_val2014_000000156466.png',
        source: 'bear',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000094355_OCCLUDED_BY_COCO_val2014_000000315864.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000094355_OCCLUDED_BY_COCO_val2014_000000315864.png',
        source: 'bear',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000370749_OCCLUDED_BY_COCO_val2014_000000427041.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000370749_OCCLUDED_BY_COCO_val2014_000000427041.png',
        source: 'elephant',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000487461.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000487461.png',
        source: 'cat',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000399400_OCCLUDED_BY_COCO_val2014_000000581726.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000399400_OCCLUDED_BY_COCO_val2014_000000581726.png',
        source: 'airplane',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000074013_OCCLUDED_BY_COCO_val2014_000000540782.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000074013_OCCLUDED_BY_COCO_val2014_000000540782.png',
        source: 'cat',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000581655_OCCLUDED_BY_COCO_val2014_000000255134.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000581655_OCCLUDED_BY_COCO_val2014_000000255134.png',
        source: 'pizza',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000561208.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000561208.png',
        source: 'bench',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000034830_OCCLUDED_BY_COCO_val2014_000000453138.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000034830_OCCLUDED_BY_COCO_val2014_000000453138.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000156466_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000156466_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'bench',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000279305.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000279305.png',
        source: 'cat',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000370749_OCCLUDED_BY_COCO_val2014_000000180411.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000370749_OCCLUDED_BY_COCO_val2014_000000180411.png',
        source: 'elephant',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131159_OCCLUDED_BY_COCO_val2014_000000213338.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131159_OCCLUDED_BY_COCO_val2014_000000213338.png',
        source: 'teddy bear',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000460927_OCCLUDED_BY_COCO_val2014_000000450849.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000460927_OCCLUDED_BY_COCO_val2014_000000450849.png',
        source: 'bear',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000049667_OCCLUDED_BY_COCO_val2014_000000249909.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000049667_OCCLUDED_BY_COCO_val2014_000000249909.png',
        source: 'clock',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000540782.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000540782.png',
        source: 'bicycle',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000132389_OCCLUDED_BY_COCO_val2014_000000272416.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000132389_OCCLUDED_BY_COCO_val2014_000000272416.png',
        source: 'dog',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000436315.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000436315.png',
        source: 'airplane',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000090367_OCCLUDED_BY_COCO_val2014_000000249909.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000090367_OCCLUDED_BY_COCO_val2014_000000249909.png',
        source: 'dog',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000325664_OCCLUDED_BY_COCO_val2014_000000426247.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000325664_OCCLUDED_BY_COCO_val2014_000000426247.png',
        source: 'bear',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000203317.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000203317.png',
        source: 'clock',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000033144_OCCLUDED_BY_COCO_val2014_000000420313.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000033144_OCCLUDED_BY_COCO_val2014_000000420313.png',
        source: 'truck',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000483348_OCCLUDED_BY_COCO_val2014_000000189772.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000483348_OCCLUDED_BY_COCO_val2014_000000189772.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000246512.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000246512.png',
        source: 'truck',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000581726_OCCLUDED_BY_COCO_val2014_000000274653.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000581726_OCCLUDED_BY_COCO_val2014_000000274653.png',
        source: 'elephant',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000334140_OCCLUDED_BY_COCO_val2014_000000069698.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000334140_OCCLUDED_BY_COCO_val2014_000000069698.png',
        source: 'bicycle',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000404191_OCCLUDED_BY_COCO_val2014_000000172627.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000404191_OCCLUDED_BY_COCO_val2014_000000172627.png',
        source: 'refrigerator',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000454693_OCCLUDED_BY_COCO_val2014_000000370749.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000454693_OCCLUDED_BY_COCO_val2014_000000370749.png',
        source: 'giraffe',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000244218_OCCLUDED_BY_COCO_val2014_000000069698.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000244218_OCCLUDED_BY_COCO_val2014_000000069698.png',
        source: 'refrigerator',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000237735_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000237735_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'airplane',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000453138.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000453138.png',
        source: 'clock',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000404191_OCCLUDED_BY_COCO_val2014_000000558073.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000404191_OCCLUDED_BY_COCO_val2014_000000558073.png',
        source: 'refrigerator',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000399400_OCCLUDED_BY_COCO_val2014_000000508672.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000399400_OCCLUDED_BY_COCO_val2014_000000508672.png',
        source: 'airplane',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000532285.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000532285.png',
        source: 'cake',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000090367_OCCLUDED_BY_COCO_val2014_000000356478.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000090367_OCCLUDED_BY_COCO_val2014_000000356478.png',
        source: 'dog',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000032952_OCCLUDED_BY_COCO_val2014_000000131531.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000032952_OCCLUDED_BY_COCO_val2014_000000131531.png',
        source: 'elephant',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000139436.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000139436.png',
        source: 'bench',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000025430.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000025430.png',
        source: 'toilet',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000393995.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000393995.png',
        source: 'clock',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000483564_OCCLUDED_BY_COCO_val2014_000000459136.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000483564_OCCLUDED_BY_COCO_val2014_000000459136.png',
        source: 'clock',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000240918.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000240918.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000279305_OCCLUDED_BY_COCO_val2014_000000143644.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000279305_OCCLUDED_BY_COCO_val2014_000000143644.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000274653_OCCLUDED_BY_COCO_val2014_000000540816.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000274653_OCCLUDED_BY_COCO_val2014_000000540816.png',
        source: 'cake',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000344368.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000344368.png',
        source: 'truck',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000116786.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000116786.png',
        source: 'clock',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000540789.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000540789.png',
        source: 'cat',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000279305_OCCLUDED_BY_COCO_val2014_000000190783.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000279305_OCCLUDED_BY_COCO_val2014_000000190783.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000279305.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000279305.png',
        source: 'truck',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000446703.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000446703.png',
        source: 'pizza',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000434576.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000434576.png',
        source: 'toilet',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000540789.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000540789.png',
        source: 'pizza',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000205239.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000205239.png',
        source: 'truck',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000189772.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000189772.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000389283.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000389283.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000240918.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000240918.png',
        source: 'toilet',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000188447.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000188447.png',
        source: 'cake',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000524392.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000524392.png',
        source: 'clock',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000079878.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000079878.png',
        source: 'pizza',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000534601.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000534601.png',
        source: 'bicycle',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000240918.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000240918.png',
        source: 'cake',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000262347.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000262347.png',
        source: 'giraffe',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000442952.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000442952.png',
        source: 'cake',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000315864_OCCLUDED_BY_COCO_val2014_000000325664.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000315864_OCCLUDED_BY_COCO_val2014_000000325664.png',
        source: 'cake',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000074013.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000074013.png',
        source: 'clock',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000532571.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000532571.png',
        source: 'clock',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000295270.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000295270.png',
        source: 'clock',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000274591.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000274591.png',
        source: 'bicycle',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000168129.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000168129.png',
        source: 'bicycle',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000483564.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000483564.png',
        source: 'toilet',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000561208_OCCLUDED_BY_COCO_val2014_000000451648.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000561208_OCCLUDED_BY_COCO_val2014_000000451648.png',
        source: 'giraffe',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000164363.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000164363.png',
        source: 'pizza',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000188447_OCCLUDED_BY_COCO_val2014_000000099543.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000188447_OCCLUDED_BY_COCO_val2014_000000099543.png',
        source: 'pizza',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000090367.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000090367.png',
        source: 'cake',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000499835.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000499835.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000471184.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000471184.png',
        source: 'toilet',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000327777_OCCLUDED_BY_COCO_val2014_000000483564.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000327777_OCCLUDED_BY_COCO_val2014_000000483564.png',
        source: 'pizza',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000120850.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000116786_OCCLUDED_BY_COCO_val2014_000000120850.png',
        source: 'toilet',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000168129.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000168129.png',
        source: 'clock',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000295270.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000295270.png',
        source: 'bicycle',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000139436.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000139436.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000404191.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000404191.png',
        source: 'pizza',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000246512.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000246512.png',
        source: 'toilet',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000104619.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000104619.png',
        source: 'cake',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000190783.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000190783.png',
        source: 'clock',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000427041.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000427041.png',
        source: 'cat',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000460927.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000460927.png',
        source: 'elephant',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000417957.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000002061_OCCLUDED_BY_COCO_val2014_000000417957.png',
        source: 'toilet',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000032952.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000032952.png',
        source: 'cake',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000104619.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000104619.png',
        source: 'toilet',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000029346_OCCLUDED_BY_COCO_val2014_000000389283.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000029346_OCCLUDED_BY_COCO_val2014_000000389283.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000020536.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000020536.png',
        source: 'bicycle',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000188522.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000188522.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000315864_OCCLUDED_BY_COCO_val2014_000000043128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000315864_OCCLUDED_BY_COCO_val2014_000000043128.png',
        source: 'cake',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000074013.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000045057_OCCLUDED_BY_COCO_val2014_000000074013.png',
        source: 'pizza',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000499835.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000499835.png',
        source: 'cake',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000242287.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000558073_OCCLUDED_BY_COCO_val2014_000000242287.png',
        source: 'cat',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000290836.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000290836.png',
        source: 'giraffe',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000020536.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000020536.png',
        source: 'cake',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000451648_OCCLUDED_BY_COCO_val2014_000000370749.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000451648_OCCLUDED_BY_COCO_val2014_000000370749.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000188447_OCCLUDED_BY_COCO_val2014_000000002061.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000188447_OCCLUDED_BY_COCO_val2014_000000002061.png',
        source: 'pizza',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000219174.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000219174.png',
        source: 'cake',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000029346_OCCLUDED_BY_COCO_val2014_000000325664.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000029346_OCCLUDED_BY_COCO_val2014_000000325664.png',
        source: 'cake',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000120850.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540782_OCCLUDED_BY_COCO_val2014_000000120850.png',
        source: 'bench',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000164372.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000164372.png',
        source: 'bicycle',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000524392.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000524392.png',
        source: 'pizza',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000290836.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000290836.png',
        source: 'toilet',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000205239.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000205239.png',
        source: 'cake',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000094355.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000094355.png',
        source: 'toilet',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000274653_OCCLUDED_BY_COCO_val2014_000000534601.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000274653_OCCLUDED_BY_COCO_val2014_000000534601.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000049667.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000377406_OCCLUDED_BY_COCO_val2014_000000049667.png',
        source: 'bench',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000451648.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000451648.png',
        source: 'bicycle',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000168129.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000164372_OCCLUDED_BY_COCO_val2014_000000168129.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000156466.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000156466.png',
        source: 'cake',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000238377.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000238377.png',
        source: 'clock',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000356478.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000356478.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000534601.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000189772_OCCLUDED_BY_COCO_val2014_000000534601.png',
        source: 'bicycle',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000534601.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000098633_OCCLUDED_BY_COCO_val2014_000000534601.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000313420.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000313420.png',
        source: 'cake',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000188522.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000188522.png',
        source: 'clock',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000120850.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000120850.png',
        source: 'truck',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000344368.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000246540_OCCLUDED_BY_COCO_val2014_000000344368.png',
        source: 'cake',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000029346.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000029346.png',
        source: 'clock',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000460927.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000460927.png',
        source: 'toilet',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000043128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131531_OCCLUDED_BY_COCO_val2014_000000043128.png',
        source: 'clock',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000272416.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000272416.png',
        source: 'pizza',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000558073.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000436315_OCCLUDED_BY_COCO_val2014_000000558073.png',
        source: 'pizza',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000075786.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000456732_OCCLUDED_BY_COCO_val2014_000000075786.png',
        source: 'toilet',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000336302.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000336302.png',
        source: 'bicycle',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000524392.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000524392.png',
        source: 'bicycle',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000020536.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000020536.png',
        source: 'clock',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000346605.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000346605.png',
        source: 'truck',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000397322.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000397322.png',
        source: 'cake',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000094355.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205647_OCCLUDED_BY_COCO_val2014_000000094355.png',
        source: 'truck',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000029346_OCCLUDED_BY_COCO_val2014_000000043128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000029346_OCCLUDED_BY_COCO_val2014_000000043128.png',
        source: 'cake',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000540782.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000540782.png',
        source: 'clock',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000264870.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242379_OCCLUDED_BY_COCO_val2014_000000264870.png',
        source: 'cake',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000049667.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389128_OCCLUDED_BY_COCO_val2014_000000049667.png',
        source: 'toilet',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000262347_OCCLUDED_BY_COCO_val2014_000000320020.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000262347_OCCLUDED_BY_COCO_val2014_000000320020.png',
        source: 'bench',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000313420_OCCLUDED_BY_COCO_val2014_000000325664.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000313420_OCCLUDED_BY_COCO_val2014_000000325664.png',
        source: 'teddy bear',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000098444_OCCLUDED_BY_COCO_val2014_000000262347.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000098444_OCCLUDED_BY_COCO_val2014_000000262347.png',
        source: 'teddy bear',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000483564_OCCLUDED_BY_COCO_val2014_000000090367.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000483564_OCCLUDED_BY_COCO_val2014_000000090367.png',
        source: 'clock',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000041257_OCCLUDED_BY_COCO_val2014_000000020536.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000041257_OCCLUDED_BY_COCO_val2014_000000020536.png',
        source: 'cat',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540816_OCCLUDED_BY_COCO_val2014_000000104619.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540816_OCCLUDED_BY_COCO_val2014_000000104619.png',
        source: 'airplane',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000334140_OCCLUDED_BY_COCO_val2014_000000045663.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000334140_OCCLUDED_BY_COCO_val2014_000000045663.png',
        source: 'bicycle',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000110630_OCCLUDED_BY_COCO_val2014_000000540816.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000110630_OCCLUDED_BY_COCO_val2014_000000540816.png',
        source: 'pizza',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000004396_OCCLUDED_BY_COCO_val2014_000000399400.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000004396_OCCLUDED_BY_COCO_val2014_000000399400.png',
        source: 'teddy bear',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000442952_OCCLUDED_BY_COCO_val2014_000000120850.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000442952_OCCLUDED_BY_COCO_val2014_000000120850.png',
        source: 'bench',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000238377_OCCLUDED_BY_COCO_val2014_000000334140.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000238377_OCCLUDED_BY_COCO_val2014_000000334140.png',
        source: 'dog',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000436280_OCCLUDED_BY_COCO_val2014_000000098767.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000436280_OCCLUDED_BY_COCO_val2014_000000098767.png',
        source: 'airplane',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000532773.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000532773.png',
        source: 'giraffe',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000162763_OCCLUDED_BY_COCO_val2014_000000532773.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000162763_OCCLUDED_BY_COCO_val2014_000000532773.png',
        source: 'bicycle',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000399400.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000249909_OCCLUDED_BY_COCO_val2014_000000399400.png',
        source: 'giraffe',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000323709_OCCLUDED_BY_COCO_val2014_000000528972.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000323709_OCCLUDED_BY_COCO_val2014_000000528972.png',
        source: 'airplane',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000487461_OCCLUDED_BY_COCO_val2014_000000404191.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000487461_OCCLUDED_BY_COCO_val2014_000000404191.png',
        source: 'bear',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000110630.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000110630.png',
        source: 'cake',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000132389.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000132389.png',
        source: 'elephant',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000251936_OCCLUDED_BY_COCO_val2014_000000459136.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000251936_OCCLUDED_BY_COCO_val2014_000000459136.png',
        source: 'bear',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000290836_OCCLUDED_BY_COCO_val2014_000000456732.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000290836_OCCLUDED_BY_COCO_val2014_000000456732.png',
        source: 'elephant',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000451648_OCCLUDED_BY_COCO_val2014_000000140010.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000451648_OCCLUDED_BY_COCO_val2014_000000140010.png',
        source: 'truck',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000290836.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532773_OCCLUDED_BY_COCO_val2014_000000290836.png',
        source: 'truck',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000104619_OCCLUDED_BY_COCO_val2014_000000456732.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000104619_OCCLUDED_BY_COCO_val2014_000000456732.png',
        source: 'giraffe',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000164363_OCCLUDED_BY_COCO_val2014_000000389283.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000164363_OCCLUDED_BY_COCO_val2014_000000389283.png',
        source: 'clock',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000074013_OCCLUDED_BY_COCO_val2014_000000320020.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000074013_OCCLUDED_BY_COCO_val2014_000000320020.png',
        source: 'cat',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000581655_OCCLUDED_BY_COCO_val2014_000000221666.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000581655_OCCLUDED_BY_COCO_val2014_000000221666.png',
        source: 'pizza',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000034830_OCCLUDED_BY_COCO_val2014_000000540789.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000034830_OCCLUDED_BY_COCO_val2014_000000540789.png',
        source: 'toilet',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000172627_OCCLUDED_BY_COCO_val2014_000000327777.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000172627_OCCLUDED_BY_COCO_val2014_000000327777.png',
        source: 'cake',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000553094.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000079878_OCCLUDED_BY_COCO_val2014_000000553094.png',
        source: 'toilet',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000453138_OCCLUDED_BY_COCO_val2014_000000295076.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000453138_OCCLUDED_BY_COCO_val2014_000000295076.png',
        source: 'bicycle',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000532773.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000532773.png',
        source: 'airplane',
        occluder: 'truck'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000237597_OCCLUDED_BY_COCO_val2014_000000303253.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000237597_OCCLUDED_BY_COCO_val2014_000000303253.png',
        source: 'elephant',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000404191.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000450849_OCCLUDED_BY_COCO_val2014_000000404191.png',
        source: 'clock',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000238377.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000238377.png',
        source: 'airplane',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000555023_OCCLUDED_BY_COCO_val2014_000000098633.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000555023_OCCLUDED_BY_COCO_val2014_000000098633.png',
        source: 'giraffe',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000313420_OCCLUDED_BY_COCO_val2014_000000540816.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000313420_OCCLUDED_BY_COCO_val2014_000000540816.png',
        source: 'teddy bear',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000540830.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000540830.png',
        source: 'bench',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000099543_OCCLUDED_BY_COCO_val2014_000000456732.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000099543_OCCLUDED_BY_COCO_val2014_000000456732.png',
        source: 'dog',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000033144_OCCLUDED_BY_COCO_val2014_000000389283.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000033144_OCCLUDED_BY_COCO_val2014_000000389283.png',
        source: 'truck',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000456732.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000456732.png',
        source: 'dog',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000069698_OCCLUDED_BY_COCO_val2014_000000004396.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000069698_OCCLUDED_BY_COCO_val2014_000000004396.png',
        source: 'pizza',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000460927.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000205103_OCCLUDED_BY_COCO_val2014_000000460927.png',
        source: 'cat',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000303253.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000303253.png',
        source: 'bicycle',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540789_OCCLUDED_BY_COCO_val2014_000000313420.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540789_OCCLUDED_BY_COCO_val2014_000000313420.png',
        source: 'clock',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000255134_OCCLUDED_BY_COCO_val2014_000000344368.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000255134_OCCLUDED_BY_COCO_val2014_000000344368.png',
        source: 'dog',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000110759_OCCLUDED_BY_COCO_val2014_000000404191.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000110759_OCCLUDED_BY_COCO_val2014_000000404191.png',
        source: 'giraffe',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000098444_OCCLUDED_BY_COCO_val2014_000000456865.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000098444_OCCLUDED_BY_COCO_val2014_000000456865.png',
        source: 'teddy bear',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540789_OCCLUDED_BY_COCO_val2014_000000251936.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540789_OCCLUDED_BY_COCO_val2014_000000251936.png',
        source: 'clock',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000074013_OCCLUDED_BY_COCO_val2014_000000098633.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000074013_OCCLUDED_BY_COCO_val2014_000000098633.png',
        source: 'cat',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000389283_OCCLUDED_BY_COCO_val2014_000000002061.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000389283_OCCLUDED_BY_COCO_val2014_000000002061.png',
        source: 'teddy bear',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000190783.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000139436_OCCLUDED_BY_COCO_val2014_000000190783.png',
        source: 'elephant',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000456732.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000049733_OCCLUDED_BY_COCO_val2014_000000456732.png',
        source: 'clock',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000034830.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000376996_OCCLUDED_BY_COCO_val2014_000000034830.png',
        source: 'airplane',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000043128.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000508672_OCCLUDED_BY_COCO_val2014_000000043128.png',
        source: 'bicycle',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000346605_OCCLUDED_BY_COCO_val2014_000000045057.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000346605_OCCLUDED_BY_COCO_val2014_000000045057.png',
        source: 'refrigerator',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000313420_OCCLUDED_BY_COCO_val2014_000000397322.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000313420_OCCLUDED_BY_COCO_val2014_000000397322.png',
        source: 'teddy bear',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000483564_OCCLUDED_BY_COCO_val2014_000000295270.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000483564_OCCLUDED_BY_COCO_val2014_000000295270.png',
        source: 'clock',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131159_OCCLUDED_BY_COCO_val2014_000000237735.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131159_OCCLUDED_BY_COCO_val2014_000000237735.png',
        source: 'teddy bear',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000295076_OCCLUDED_BY_COCO_val2014_000000295270.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000295076_OCCLUDED_BY_COCO_val2014_000000295270.png',
        source: 'airplane',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000442952_OCCLUDED_BY_COCO_val2014_000000219174.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000442952_OCCLUDED_BY_COCO_val2014_000000219174.png',
        source: 'bench',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000120850_OCCLUDED_BY_COCO_val2014_000000029346.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000120850_OCCLUDED_BY_COCO_val2014_000000029346.png',
        source: 'bear',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000579593_OCCLUDED_BY_COCO_val2014_000000079878.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000579593_OCCLUDED_BY_COCO_val2014_000000079878.png',
        source: 'giraffe',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000131159_OCCLUDED_BY_COCO_val2014_000000553094.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000131159_OCCLUDED_BY_COCO_val2014_000000553094.png',
        source: 'teddy bear',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000049667_OCCLUDED_BY_COCO_val2014_000000045057.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000049667_OCCLUDED_BY_COCO_val2014_000000045057.png',
        source: 'clock',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000278601_OCCLUDED_BY_COCO_val2014_000000344368.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000278601_OCCLUDED_BY_COCO_val2014_000000344368.png',
        source: 'truck',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000246512.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000532571_OCCLUDED_BY_COCO_val2014_000000246512.png',
        source: 'pizza',
        occluder: 'dog'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000581726.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000581726.png',
        source: 'cake',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000540816_OCCLUDED_BY_COCO_val2014_000000079878.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000540816_OCCLUDED_BY_COCO_val2014_000000079878.png',
        source: 'airplane',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000290836.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000135670_OCCLUDED_BY_COCO_val2014_000000290836.png',
        source: 'bicycle',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000534601_OCCLUDED_BY_COCO_val2014_000000020536.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000534601_OCCLUDED_BY_COCO_val2014_000000020536.png',
        source: 'teddy bear',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000427041_OCCLUDED_BY_COCO_val2014_000000098767.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000427041_OCCLUDED_BY_COCO_val2014_000000098767.png',
        source: 'truck',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000143644_OCCLUDED_BY_COCO_val2014_000000434576.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000143644_OCCLUDED_BY_COCO_val2014_000000434576.png',
        source: 'teddy bear',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000219174_OCCLUDED_BY_COCO_val2014_000000377406.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000219174_OCCLUDED_BY_COCO_val2014_000000377406.png',
        source: 'bear',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000320020_OCCLUDED_BY_COCO_val2014_000000295076.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000320020_OCCLUDED_BY_COCO_val2014_000000295076.png',
        source: 'dog',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000453138_OCCLUDED_BY_COCO_val2014_000000290836.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000453138_OCCLUDED_BY_COCO_val2014_000000290836.png',
        source: 'bicycle',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000336302_OCCLUDED_BY_COCO_val2014_000000325664.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000336302_OCCLUDED_BY_COCO_val2014_000000325664.png',
        source: 'cat',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000116786.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000000042_OCCLUDED_BY_COCO_val2014_000000116786.png',
        source: 'dog',
        occluder: 'toilet'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000460927_OCCLUDED_BY_COCO_val2014_000000334140.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000460927_OCCLUDED_BY_COCO_val2014_000000334140.png',
        source: 'bear',
        occluder: 'bicycle'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000188667.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000082327_OCCLUDED_BY_COCO_val2014_000000188667.png',
        source: 'clock',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000237597_OCCLUDED_BY_COCO_val2014_000000049667.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000237597_OCCLUDED_BY_COCO_val2014_000000049667.png',
        source: 'elephant',
        occluder: 'clock'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000025430.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000213338_OCCLUDED_BY_COCO_val2014_000000025430.png',
        source: 'clock',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000307209_OCCLUDED_BY_COCO_val2014_000000532531.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000307209_OCCLUDED_BY_COCO_val2014_000000532531.png',
        source: 'bear',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000164363_OCCLUDED_BY_COCO_val2014_000000579593.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000164363_OCCLUDED_BY_COCO_val2014_000000579593.png',
        source: 'clock',
        occluder: 'giraffe'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242287_OCCLUDED_BY_COCO_val2014_000000534601.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242287_OCCLUDED_BY_COCO_val2014_000000534601.png',
        source: 'bicycle',
        occluder: 'teddy bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000434576_OCCLUDED_BY_COCO_val2014_000000436280.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000434576_OCCLUDED_BY_COCO_val2014_000000436280.png',
        source: 'cat',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000156466_OCCLUDED_BY_COCO_val2014_000000251936.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000156466_OCCLUDED_BY_COCO_val2014_000000251936.png',
        source: 'bench',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000346605.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000346605.png',
        source: 'bench',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000242287_OCCLUDED_BY_COCO_val2014_000000553094.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000242287_OCCLUDED_BY_COCO_val2014_000000553094.png',
        source: 'bicycle',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000399400.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000221666_OCCLUDED_BY_COCO_val2014_000000399400.png',
        source: 'bench',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000251936_OCCLUDED_BY_COCO_val2014_000000244218.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000251936_OCCLUDED_BY_COCO_val2014_000000244218.png',
        source: 'bear',
        occluder: 'refrigerator'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000188667_OCCLUDED_BY_COCO_val2014_000000180411.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000188667_OCCLUDED_BY_COCO_val2014_000000180411.png',
        source: 'cat',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000553094.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000140010_OCCLUDED_BY_COCO_val2014_000000553094.png',
        source: 'cake',
        occluder: 'airplane'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000454693_OCCLUDED_BY_COCO_val2014_000000098633.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000454693_OCCLUDED_BY_COCO_val2014_000000098633.png',
        source: 'giraffe',
        occluder: 'cake'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000172627_OCCLUDED_BY_COCO_val2014_000000295270.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000172627_OCCLUDED_BY_COCO_val2014_000000295270.png',
        source: 'cake',
        occluder: 'bench'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000344368_OCCLUDED_BY_COCO_val2014_000000274591.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000344368_OCCLUDED_BY_COCO_val2014_000000274591.png',
        source: 'cat',
        occluder: 'bear'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000274591_OCCLUDED_BY_COCO_val2014_000000032952.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000274591_OCCLUDED_BY_COCO_val2014_000000032952.png',
        source: 'bear',
        occluder: 'elephant'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000327777_OCCLUDED_BY_COCO_val2014_000000434576.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000327777_OCCLUDED_BY_COCO_val2014_000000434576.png',
        source: 'pizza',
        occluder: 'cat'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000295076_OCCLUDED_BY_COCO_val2014_000000581655.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000295076_OCCLUDED_BY_COCO_val2014_000000581655.png',
        source: 'airplane',
        occluder: 'pizza'
    },
    {
        stimulus: 'psychophysics_images/images/COCO_val2014_000000555023_OCCLUDED_BY_COCO_val2014_000000483564.png',
        mask: 'psychophysics_images/masks/COCO_val2014_000000555023_OCCLUDED_BY_COCO_val2014_000000483564.png',
        source: 'giraffe',
        occluder: 'clock'
    },
];

