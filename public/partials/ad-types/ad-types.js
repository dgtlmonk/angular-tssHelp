
angular.module('tssHelp').controller('adTypesCtrl',function($scope,$sce){

  $scope.adTypes = [
      {'name': 'Expanding Ad',
       'desc': "An Expanding creative is an ad with two sizes, an initial collapsed size and an expanded size.",
       'state':'ad-types.expanding',
       'url':'https://support.google.com/richmedia/answer/1719800',
       'as':'AS2, AS3',
       'id':1,
       'tag':'expanding'
      },
      {'name': 'Floating Ad',
        'desc': "A Floating creative is a SWF that floats on top of a publisher’s page. It's also known as an interstitial or prestitial ad. This ad format allows flexibility. Because it isn't assigned to a fixed ad slot, it can be almost any shape or size, and you can place it anywhere over a publisher's content.",
       'state':'ad-types.floating',
       'url':'https://support.google.com/richmedia/answer/1719803',
       'as':'AS2, AS3',
       'id':2,
       'tag':'floating'
      },
      {'name': 'In-Page Ad',
       'desc': "An In-page creative is the most basic ad format. It appears within set borders on a page and doesn't expand or cover other page content.",
       'state':'ad-type.in-page',
       'url':'https://support.google.com/richmedia/answer/1691877?topic=1691993',
       'as':'AS2, AS3',
       'id':3,
       'tag':'in-page'
      },
     {'name': 'In-Page with Floating',
       "desc":"<p>An In-page with Floating creative uses both an In-page and a Floating creative in one Studio ad format. <p/><p> This allows you to deliver these two creative units to one page at the same time. Since they're uploaded together in DoubleClick Studio, we refer to the individual creatives as companions. This setup lets you open and close one companion creative from the other. For example, you can open and close the Floating creative from the In-page creative with this format. <p/> <p>While these units are companions, each creative operates on its own individual Flash timeline. If you want the two files to synchronize animation, use the Local Connect component.</p>",
       'state':'ad-type.in-page-floating',
       'url':'https://support.google.com/richmedia/answer/1691877?topic=1691993',
       'as':'AS2, AS3',
       'id':4,
       'tag':'inpage-floating'
      },

      {'name':"GDN Standard Expandable",
       'desc':"Standard Expandable ads are high-engagement formats only available on the Google Display Network (GDN).",
      'state':'ad-type.gdn-expandable',
      'url':'https://support.google.com/richmedia/answer/2941507',
      'as':'AS2/AS3',
      'id':5,
      'tag':'gdn-expandable'

      },
    {'name':"Pushdown",
     'desc':"<p>A Pushdown creative is a type of expanding ad that pushes down the content of a webpage when the creative expands, moving the site out of the way to display the ad.</p><p> With DoubleClick Studio, you build a Pushdown the same way you build a regular Expanding creative. In fact, the push-down functionality isn't built into the Flash assets of the creative. The \"push-down\" setting is controlled in DFA Trafficking or DFP when the ad is trafficked.</p>",
     'state':'ad-type.pushdown',
     'url':'https://support.google.com/richmedia/answer/1719740',
     'as':'AS2/AS3',
     'id':6,
     'tag':'pushdown'
    },
    {'name':"Peeldown",
     'desc':"<p>A Peel-down creative is a type of expanding ad that shows a glimpse of an ad in the corner of a web page. When the user interacts with the creative, the rest of the ad appears to peel down to reveal the full message.<p/><p> With DoubleClick Studio, you build a Peel-down the same way you build an Expanding creative, using Studio’s Expanding component. The key difference is that with a Peel-down creative, you create the effect of a page corner peeling away by adding a peel-down animation to your SWF and anchoring the creative to a corner.</p>",
     'state':'ad-type.peeldown',
     'url':'https://support.google.com/richmedia/answer/2660539',
     'as':'AS2/AS3',
     'id':7,
     'tag':'peeldown'
    },
    {'name':"Masthead",
     'desc':"<p>Building these formats is similar to how you build other DoubleClick Studio formats. In fact, you can build them following the Studio In-page and Expanding build guides.<p/><p>The YouTube homepage masthead comes in two formats:<ul><li>In-page masthead: A 970x250 pixel in-page unit that runs the full width of the YouTube homepage.</li><li>Expandable masthead: A 970x250 pixel in-page unit that runs the full width of the YouTube homepage. On click, it expands to 970x500 pixels.</li></ul></p>",
     'state':'ad-type.masthead',
     'url':'https://support.google.com/richmedia/answer/2566054',
     'as':'AS2/AS3',
     'id':8,
     'tag':'masthead'
    },
  {'name':"VPaid",
     'desc':"<p>ID creatives are Rich Media creatives that render in a publisher's in-stream video player. They use a Flash asset (SWF) and typically involve video content. One important ability of VPAID creatives is that they can pause or mute the publisher's video player and bring up their own content, including interactive options. You can see a <a href='http://www.richmediagallery.com/galleryDetail/?id=35421' target='_blank'>demo</a> of a DFA VPAID In-Stream creative in the DoubleClick Rich Media Gallery.</p><p>There are two types of VPAID creatives: VPAID linear and VPAID non-linear.</p>",
     'state':'ad-type.masthead',
     'url':'https://support.google.com/richmedia/answer/3155889?hl=en',
     'as':'AS3',
     'id':9,
     'tag':'vpaid'
    },

    {'name':"HTML5 Creatives",
       'desc':"HTML5 is a standard for structuring and delivering web content. It is essentially pre-installed in any compatible browser, making it easy to create ads that integrate seamlessly with existing content.",
      'state':'ad-type.html5',
      'url':'https://support.google.com/richmedia/answer/2672542',
      'as':'HTML5 / CSS /JavaScript',
      'id':10,
      'tag':'html5'
    }
  ];

});
