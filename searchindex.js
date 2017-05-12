Search.setIndex({docnames:["contributions","index","installation","introduction","nutsflow","nutsflow.examples","overview","tutorial/custom_nuts","tutorial/debugging","tutorial/divide_conquer","tutorial/error_messages","tutorial/filtering","tutorial/introduction","tutorial/nuts_basics","tutorial/performance","tutorial/practice_problems","tutorial/prerequisites","tutorial/rearranging","tutorial/recipes","tutorial/sinks","tutorial/sources","tutorial/transforming","tutorial/underscore"],envversion:50,filenames:["contributions.rst","index.rst","installation.rst","introduction.rst","nutsflow.rst","nutsflow.examples.rst","overview.rst","tutorial\\custom_nuts.rst","tutorial\\debugging.rst","tutorial\\divide_conquer.rst","tutorial\\error_messages.rst","tutorial\\filtering.rst","tutorial\\introduction.rst","tutorial\\nuts_basics.rst","tutorial\\performance.rst","tutorial\\practice_problems.rst","tutorial\\prerequisites.rst","tutorial\\rearranging.rst","tutorial\\recipes.rst","tutorial\\sinks.rst","tutorial\\sources.rst","tutorial\\transforming.rst","tutorial\\underscore.rst"],objects:{"":{"function":[4,0,0,"-"],base:[4,0,0,"-"],common:[4,0,0,"-"],factory:[4,0,0,"-"],iterfunction:[4,0,0,"-"],nutsflow:[4,0,0,"-"],processor:[4,0,0,"-"],sink:[4,0,0,"-"],source:[4,0,0,"-"],underscore:[4,0,0,"-"]},"nutsflow.base":{Nut:[4,1,1,""],NutFunction:[4,1,1,""],NutSink:[4,1,1,""],NutSource:[4,1,1,""]},"nutsflow.base.Nut":{__call__:[4,2,1,""],__init__:[4,2,1,""],__rrshift__:[4,2,1,""]},"nutsflow.base.NutFunction":{__call__:[4,2,1,""],__rrshift__:[4,2,1,""]},"nutsflow.base.NutSink":{__call__:[4,2,1,""]},"nutsflow.base.NutSource":{__rrshift__:[4,2,1,""]},"nutsflow.common":{Redirect:[4,1,1,""],as_list:[4,3,1,""],as_set:[4,3,1,""],as_tuple:[4,3,1,""],console:[4,3,1,""],sec_to_hms:[4,3,1,""],timestr:[4,3,1,""]},"nutsflow.common.Redirect":{__init__:[4,2,1,""]},"nutsflow.examples":{examples:[5,0,0,"-"]},"nutsflow.examples.examples":{MyClone:[5,1,1,""],MyCollect:[5,1,1,""],MyGreaterThan:[5,1,1,""],MyPipeline:[5,1,1,""],MyRange:[5,1,1,""],MySmallerOrEqualThan:[5,1,1,""],MyTimes:[5,1,1,""],run:[5,3,1,""]},"nutsflow.examples.examples.MyClone":{__rrshift__:[5,2,1,""]},"nutsflow.examples.examples.MyCollect":{__rrshift__:[5,2,1,""]},"nutsflow.examples.examples.MyGreaterThan":{__rrshift__:[5,2,1,""]},"nutsflow.examples.examples.MyPipeline":{__rrshift__:[5,2,1,""]},"nutsflow.examples.examples.MySmallerOrEqualThan":{__rrshift__:[5,2,1,""]},"nutsflow.examples.examples.MyTimes":{__call__:[5,2,1,""]},"nutsflow.factory":{nut_filter:[4,3,1,""],nut_filterfalse:[4,3,1,""],nut_function:[4,3,1,""],nut_processor:[4,3,1,""],nut_sink:[4,3,1,""],nut_source:[4,3,1,""]},"nutsflow.function":{Counter:[4,1,1,""],Format:[4,1,1,""],Get:[4,1,1,""],GetCols:[4,1,1,""],Identity:[4,1,1,""],NOP:[4,1,1,""],Print:[4,1,1,""],Sleep:[4,1,1,""],Square:[4,1,1,""]},"nutsflow.function.Counter":{__call__:[4,2,1,""],__init__:[4,2,1,""],reset:[4,2,1,""]},"nutsflow.function.Format":{__call__:[4,2,1,""]},"nutsflow.function.Get":{__call__:[4,2,1,""]},"nutsflow.function.GetCols":{__call__:[4,2,1,""]},"nutsflow.function.Identity":{__call__:[4,2,1,""]},"nutsflow.function.NOP":{__call__:[4,2,1,""]},"nutsflow.function.Print":{__call__:[4,2,1,""],__init__:[4,2,1,""]},"nutsflow.function.Sleep":{__call__:[4,2,1,""]},"nutsflow.function.Square":{__call__:[4,2,1,""]},"nutsflow.iterfunction":{PrefetchIterator:[4,1,1,""],chunked:[4,3,1,""],consume:[4,3,1,""],flatmap:[4,3,1,""],flatten:[4,3,1,""],interleave:[4,3,1,""],length:[4,3,1,""],nth:[4,3,1,""],partition:[4,3,1,""],take:[4,3,1,""],unique:[4,3,1,""]},"nutsflow.iterfunction.PrefetchIterator":{__init__:[4,2,1,""],next:[4,2,1,""],run:[4,2,1,""]},"nutsflow.processor":{Cache:[4,1,1,""],Chunk:[4,4,1,""],ChunkBy:[4,1,1,""],ChunkWhen:[4,1,1,""],Clone:[4,1,1,""],Combine:[4,4,1,""],Concat:[4,1,1,""],Cycle:[4,4,1,""],Dedupe:[4,4,1,""],Drop:[4,1,1,""],DropWhile:[4,1,1,""],Filter:[4,4,1,""],FilterFalse:[4,4,1,""],FlatMap:[4,4,1,""],Flatten:[4,1,1,""],FlattenCol:[4,1,1,""],GroupBy:[4,1,1,""],GroupBySorted:[4,1,1,""],If:[4,1,1,""],Interleave:[4,1,1,""],Map:[4,4,1,""],MapCol:[4,1,1,""],MapMulti:[4,1,1,""],MapPar:[4,1,1,""],Partition:[4,4,1,""],Permutate:[4,4,1,""],Pick:[4,1,1,""],Prefetch:[4,1,1,""],PrintProgress:[4,1,1,""],Shuffle:[4,1,1,""],Slice:[4,1,1,""],Take:[4,1,1,""],TakeWhile:[4,4,1,""],Tee:[4,4,1,""],Zip:[4,1,1,""],ZipWith:[4,1,1,""]},"nutsflow.processor.Cache":{__init__:[4,2,1,""],__rrshift__:[4,2,1,""],clear:[4,2,1,""]},"nutsflow.processor.ChunkBy":{__rrshift__:[4,2,1,""]},"nutsflow.processor.ChunkWhen":{__init__:[4,2,1,""],__rrshift__:[4,2,1,""]},"nutsflow.processor.Clone":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Concat":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Drop":{__rrshift__:[4,2,1,""]},"nutsflow.processor.DropWhile":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Flatten":{__rrshift__:[4,2,1,""]},"nutsflow.processor.FlattenCol":{__rrshift__:[4,2,1,""]},"nutsflow.processor.GroupBy":{__rrshift__:[4,2,1,""]},"nutsflow.processor.GroupBySorted":{__rrshift__:[4,2,1,""]},"nutsflow.processor.If":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Interleave":{__rrshift__:[4,2,1,""]},"nutsflow.processor.MapCol":{__rrshift__:[4,2,1,""]},"nutsflow.processor.MapMulti":{__rrshift__:[4,2,1,""]},"nutsflow.processor.MapPar":{__init__:[4,2,1,""],__rrshift__:[4,2,1,""]},"nutsflow.processor.Pick":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Prefetch":{__rrshift__:[4,2,1,""]},"nutsflow.processor.PrintProgress":{__init__:[4,2,1,""],__rrshift__:[4,2,1,""]},"nutsflow.processor.Shuffle":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Slice":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Take":{__rrshift__:[4,2,1,""]},"nutsflow.processor.Zip":{__rrshift__:[4,2,1,""]},"nutsflow.processor.ZipWith":{__rrshift__:[4,2,1,""]},"nutsflow.sink":{ArgMax:[4,1,1,""],ArgMin:[4,1,1,""],Collect:[4,1,1,""],Consume:[4,4,1,""],Count:[4,4,1,""],CountValues:[4,1,1,""],Head:[4,1,1,""],Join:[4,1,1,""],Max:[4,1,1,""],Mean:[4,1,1,""],MeanStd:[4,1,1,""],Min:[4,1,1,""],Next:[4,4,1,""],Nth:[4,4,1,""],Reduce:[4,4,1,""],Sum:[4,1,1,""],Tail:[4,1,1,""],Unzip:[4,1,1,""],WriteCSV:[4,1,1,""]},"nutsflow.sink.ArgMax":{__rrshift__:[4,2,1,""]},"nutsflow.sink.ArgMin":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Collect":{__rrshift__:[4,2,1,""]},"nutsflow.sink.CountValues":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Head":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Join":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Max":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Mean":{__rrshift__:[4,2,1,""]},"nutsflow.sink.MeanStd":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Min":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Sum":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Tail":{__rrshift__:[4,2,1,""]},"nutsflow.sink.Unzip":{__rrshift__:[4,2,1,""]},"nutsflow.sink.WriteCSV":{__init__:[4,2,1,""],__rrshift__:[4,2,1,""],close:[4,2,1,""]},"nutsflow.source":{Empty:[4,1,1,""],Enumerate:[4,1,1,""],Product:[4,1,1,""],Range:[4,1,1,""],ReadCSV:[4,1,1,""],Repeat:[4,1,1,""]},"nutsflow.source.Range":{__init__:[4,2,1,""]},"nutsflow.source.ReadCSV":{__init__:[4,2,1,""],close:[4,2,1,""]},nutsflow:{"function":[4,0,0,"-"],base:[4,0,0,"-"],common:[4,0,0,"-"],examples:[5,0,0,"-"],factory:[4,0,0,"-"],iterfunction:[4,0,0,"-"],processor:[4,0,0,"-"],sink:[4,0,0,"-"],source:[4,0,0,"-"],underscore:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"02d":4,"2x3":20,"boolean":[4,8,11],"break":12,"case":[7,9,13,14,16,19],"char":4,"class":[0,4,5,7,13,16],"default":[4,9,19],"final":[0,7,8,17],"float":4,"function":[0,1,3,6,7,8,11,12,14,15,17,20,21,22],"import":[1,2,3,4,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22],"int":[4,15,18,20],"long":[4,8,11],"new":[4,6,12,15,20],"return":[4,6,7,9,11,13,16,17,19,20,21],"short":[1,16],"true":[4,6,7,8,11,15,19,21],"while":[4,6,7,11,13,14,15,19,20],And:4,For:[1,2,4,7,8,11,13,16,18,19,20,21,22],Not:[4,7],One:21,The:[3,4,7,8,9,13,14,15,16,17,19,20,21],There:16,Use:4,Useful:4,Using:16,__call__:[4,5],__init__:[4,7,16],__iter__:[4,16],__rrshift__:[4,5,7],aaabbbccc:4,aabaab:[4,19],abaacc:[4,19],abc:[4,9,20],abcd:[4,9],abl:7,abov:[7,9,16,21],abs:[4,14],absolut:[4,14,19],accept:[11,19],access:8,accord:[4,11],achiev:[14,21],action:0,activ:2,actual:8,add:[4,9,16,20],adding:15,addit:[4,7,10,13,19],advanc:[7,9,16],after:4,again:[8,16],aggreg:[4,6,7,19],agreement:21,ahead:16,aim:[0,4,16],alia:4,all:[1,4,7,9,11,15,17,19,20,21,22],allow:[4,8,9,11,13,17,19,20,21],alreadi:[7,16],also:[4,8,9,15,17,19,20,22],altern:[8,13,16],alwai:13,amount:[4,13,17],anaconda:2,ani:[4,7,9,13,16,17,19],anonym:16,anoth:[14,17],anymor:21,anyth:[6,16],apart:[9,11,13],appear:[7,20],appli:[4,7,14,21],approach:7,appropri:[7,19],arab2num:18,arab2roman:18,arab:18,arbitrai:21,arbitrari:[4,21],arg:[4,5],argmax:[4,6,19],argmin:[4,6,19],argument:[4,7,22],ariti:22,around:[3,4,7,19],arrang:3,arriv:4,as_list:4,as_set:4,as_tupl:4,ask:16,assign:16,automat:[4,19],avail:[1,7],avoid:[0,4,7,11,13,21],awar:4,back:9,base:[0,1,3,5,6,7,14,16],basic:12,bat:2,batch:4,becaus:19,becom:7,been:18,beforehand:[4,8],behav:13,being:7,below:[4,15,20,21],better:7,between:[4,7,13,14,15],bin:2,blanklin:4,block:14,bool:[4,8],borrow:22,both:[3,7,11,15],bracket:[7,10,13],broken:13,buffer:4,buffers:4,build:16,buildstr:15,busi:4,cach:[4,6,12],call:[3,4,7,9,10,11,13,16,19,20,21],callabl:12,camelcas:0,can:[4,7,8,9,11,13,14,16,17,19,20,21],cannot:21,captur:8,cartesian:[4,6,20],cde:4,certain:[8,11],chain:[1,3,4,13,16],chang:[4,6,7,13,21],charact:13,check:21,chunk:[4,6,12,14,15],chunkbi:[4,6],chunksiz:4,chunkwhen:[4,6],citizen:16,clarifi:7,classifi:14,clean:0,clear:[4,14],click:6,clone:[2,4,6,7],close:[4,19],cnt:8,code:[0,2,4,9,14,15,20,22],col1:18,col2:18,col:[4,19],collect:[0,1,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,20,21,22],column:[4,6,12,19,20,21],com:2,combin:[4,6,9,12,20],comma:[4,19,20],comment:[4,8],common:[0,11,12,14,16,17,18,21],commonli:[16,19,22],compar:4,complet:4,complex:[8,16,17,22],compos:[8,13],comprehens:16,comput:[4,6,8,13,14,17,19],computation:[14,21],concat:[4,6,12],concaten:[4,6,9],concept:[12,16],concurr:[6,14],cond:[4,8],condit:[4,6,7,11,12],confus:7,conjunct:19,connect:13,conquer:12,consecut:21,consequ:7,consid:[4,15],consol:[4,6],construct:3,constructor:4,consum:[4,6,8,13,14,16,17,20,21],consumpt:[4,9],contain:[4,6,9,11,13,15,18,19],content:[19,20],context:9,contrast:[9,11,19,20,21,22],contribut:1,conveni:8,convert:[4,6,14,17,18,19,20,21],coordin:20,copi:0,core:21,correct:20,correspond:4,could:16,count:[4,6,7,8,15,17],counter:[4,6,12,16],counterpart:18,countvalu:[4,6],cours:21,cov:0,cover:0,coverag:0,cpu:[4,14],cpu_count:4,creat:[0,2,4,6,7,8,9,13,14,16,18,19,20],crunch:4,csv:[4,6,12,19,20],csvreader:0,csvwriter:4,current:[4,14,22],custom:[4,12,13],custom_nut:0,cycl:[4,6,12],data:[0,3,4,6,7,9,11,12,13,14,16,18,19,20],databas:7,datapath:5,ddof:4,deactiv:2,deal:19,debug:[0,4,6,12],decor:[4,6,7],dedup:[4,6,12],deeper:[4,21],def:[4,7,13,15,16],defin:[4,7,12,16,17],definit:[4,7,16,17],degre:4,delet:14,delimit:[4,19,20],delta:4,demonstr:[14,20],depend:[4,6,7,8],deplet:[4,9,12,16,20],deriv:[4,7],describ:[0,7,21],descript:1,design:9,despit:7,detail:[1,6,13,16,19],determin:4,deviat:[4,6],devov:17,dict:[4,6,18,19],dictionari:[4,6,13,18,19],differ:[4,6,7,14,15,19,20,21],digit:15,directli:7,directori:18,disabl:[6,8],discard:19,disk:[4,6,14],displai:8,distibuish:13,distinct:17,divid:12,divide_conqu:0,divis:11,doc:[4,19],docstr:4,doctest:[4,8,10],doe:[4,6,7,8,9,13,14,16,19,20],doesn:[0,16],don:[2,7,20],down:8,drive:19,drop:[4,6,9,15,18],drop_last:15,dropwhil:[4,6,12],dublic:21,dup:21,duplic:[6,7,15,17,21],durat:4,each:[4,7,9,11,13,15,17,20,21],easi:13,easier:[3,7],easili:[7,13],effect:[0,4,8,19,21],effici:[9,21],either:[8,9],element:[0,4,5,6,7,8,9,11,13,14,15,16,17,19,20,21],elementwis:12,elimin:22,elment:6,else_nut:[4,8],emploi:14,empti:[4,6,19,20],enabl:[8,16],encount:[10,11],end:[4,13,17,19,20,21],ensur:[0,4,19],entir:8,enumer:[4,6],epoch:14,equal:[4,7,11,17],equival:[4,9,19,20,22],err:20,error:[0,12],error_messag:0,essenti:[16,20],estim:4,eta:4,euler:12,evalu:8,even:[4,7,11,13,15,16,21],evennumb:7,everi:[4,6,8,9,13,15,17,20],every_n:[4,8],every_sec:[4,8],exactli:7,exampl:[0,1,3,4,7,9,10,11,12,13,14,16,17,19,20,21],exce:15,except:[4,16],exclud:17,exclus:[17,21],execut:[4,6,14],exercis:15,exhaust:[4,9],exist:[2,7],exit:14,expens:[14,21],expensive_op:[4,14],explicit:[4,10],explicitli:22,explict:[3,16],express:[16,22],extend:[7,13],extern:6,extract:[3,4,6,7,11,16,17,21,22],factori:0,fals:[4,6,8,11,21],familiar:16,faster:[4,14],fetch:[4,6,14],few:[15,20],fib:15,fibonacci:15,file:[4,6,7,12,16,19,20],filepath:[4,18,19,20],fill:4,filter:[0,1,3,4,6,7,8,10,12,16,19,20,21,22],filterfals:[4,6,11],filterfunc:[4,8],find:[15,19],fine:13,finish:[4,9,17],first:[3,4,6,7,8,11,13,14,15,16,17,19,20],firstli:16,fit:16,five:[3,7,11,16,22],fix:4,flag:[8,11],flat:[9,21],flatmap:[4,6],flatten:[4,6,9,12,15],flattencol:[4,6],flattend:21,flip:18,flow:[0,2,3,4,6,7,8,9,11,12,14,15,16,19,20,21,22],flush:4,fly:7,fmt:4,fmtfunc:[4,19,20],folder:14,follow:[0,2,3,4,7,9,11,13,14,16,17,18,19,20,21,22],forc:2,format:[0,4,6,7,8,19,20],former:19,found:16,four:[15,19],fpath:18,framework:1,freedom:4,frequenc:19,frequent:[9,16,21],from:[1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],full:[4,17],func:[4,11,19,21],furthermor:8,gener:[0,4,6,7,13,14,15,17,20,21],get:[4,6,13,15,20],getcol:[4,6,18],getsitepackag:2,getvalu:4,git:[0,2],github:2,given:[4,6,7,8,15,16,17,19,20,21],good:15,gpu:[3,4,14],greater0:10,greater2:4,greater3:21,greater5:8,greater:[3,7,11,16,21,22],greater_than_5:7,greaterthan2:6,greaterthan5:7,greaterthan:[4,7],grid:20,group:[4,6,9,11,17],groupbi:[4,6,12],groupbysort:[4,6,11],gt5:8,guarante:4,guid:13,hand:[7,13],happen:4,has:[0,4,8,16,18,19,20],have:[1,4,20],head:[4,6,8,15,20],header:[4,18,19,20],help:17,henc:15,here:[1,2,7,9,14,16,17,19,20],hierarch:21,high:4,holder:[10,16],hour:4,how:[4,7],howev:[3,8,16,19,21],html:[0,4,19],http:[2,4,19],hundr:15,ident:[4,6,7,9],if_nut:[4,8],ifilt:[3,4,16],ifilterfals:4,ignor:4,iii:18,imag:14,imap:[4,13,19],immut:0,implement:[4,7,13],impress:1,improv:14,inbetween:13,inclus:4,increas:[4,6,20],increment:4,indefinit:[4,17,20],independ:[4,6,9,21],index:[1,4,6,17,19,21],indic:4,indici:4,individu:[6,8,21],infinit:[6,16],inform:[1,8],ini:0,inifil:0,ininterv:7,init:19,initi:4,initia:[4,19],input:[0,4,6,7,9,13,17,19,20,21],insert:8,instal:[0,1],instanc:[0,7,11,13,16,18,19,20,21,22],instead:[4,7,8,9,11,19],integ:[3,4,6,13,16,18,20],integr:13,intend:4,inter:4,interest:[8,9,17,19],interleav:[4,6,12],intermedi:8,interv:[3,7,8,16],introduc:[12,16],introduct:[0,1],invalid:7,invers:6,invert:4,invok:7,iseven:15,islic:[3,4,16],ismultipl:15,isnul:7,ispalindrom:[15,17],isvalid:7,it1:4,it2:4,item:[0,4],iter:[0,1,3,4,5,6,7,9,11,12,14,17,19,21],iterfunct:0,iteritem:20,iterpo:4,itertool:[3,4,13,16,19],its:[4,8,9,12,13,16,17,19,22],itself:[4,19],izip:4,izip_longest:4,join:[4,6,7,19,20],just:[0,4,13,18],keep:[4,16],kei:[4,11,17,19],kept:4,key_or_col:4,keycol:4,keyword:[4,16,22],know:2,known:[4,8],kth:15,kwarg:[4,5,19,20],lambda:[3,4,6,7,8,9,10,11,12,13,15,17,19,20,21,22],larg:[3,4,7,8,9,11,13,16,17,19],larger:4,largest:[4,6,15,19],last:[4,6,7,8,15,19],later:19,lazi:[13,16],learn:[3,14],leav:21,left:[7,20],len:[4,19,20,22],length:[4,6,17],less:[7,13],let:[7,21],letter:[9,13],level:[4,21],lib:2,librari:[3,4,16,19],like:[0,9,13],limit:[4,9,11,12,13,14,16,20,22],line:[4,7,12,16,18,19,20],linear:3,linux:2,list:[0,3,4,6,9,10,13,15,16,17,19,21],littl:16,load:[4,11,12,13,14],logic:6,longer:[8,13],longest:[4,19],look:1,loop:[16,20],lowercas:7,mac:2,macadamia:13,machin:[3,14],made:15,maet3608:2,maet:[0,2],make:[0,13,16,18],mani:[4,15,16],map:[4,6,7,9,12,15,17,19,20,22],mapcol:[4,6,18,19],mapmulti:[4,6,9],mappar:[4,6,12],materi:9,materialz:9,max:[4,6,15,16,19],maximum:[4,16,19],mayb:17,mean:[4,6],meanstd:[4,6],meet:7,mem:4,memor:17,memori:[4,7,9,11,13,16,17,19],messag:12,met:11,method:[4,7,8,14,16,19],might:[9,13,17],million:[13,15],min:[4,6,19],mind:16,minimum:[4,19],minut:4,miss:[0,10],mode:4,modifi:[8,13],modul:[1,13],monitor:4,more:[1,3,6,7,8,9,11,13,16,17,19,21,22],most:[7,11,16,19,21],mostli:4,multipl:[4,6,9,13,14,15,21],multipli:7,must:[4,11,13,14,20,21,22],mutat:0,my_project:2,my_python_path:2,myclon:5,mycollect:5,myfmt:4,mygreaterthan:5,mypipelin:5,myrang:5,mysmallerorequalthan:5,mytim:5,naiv:4,name:[0,4,6,8,12,13,16],nameerror:10,natur:15,necessari:[8,9,11,17,21],necessarili:7,need:[0,4,7,8,13,16,17,19,21,22],neg:[4,11],negat:[11,21],neither:13,nest:[3,20,22],network:14,never:20,next:[4,6,7,16,19],nine:22,nokei:[4,11],non:[4,17],none:[4,9,19],nop:[4,6,8],nor:13,normal:13,notat:[16,22],note:[4,7,8,9,11,13,14,16,17,19,21,22],notgreaterthan:4,noth:[4,6,13,19],notimplementederror:4,now:14,nth:[4,6,15],num:[4,19],num_prefetch:4,number:[0,4,6,7,8,9,11,13,14,15,16,17,18,19,20,21,22],numbers1:9,numbers2:9,nut:[0,2,3,4,5,6,8,9,10,11,12,14,15,16,17,21,22],nut_filerfals:4,nut_filt:[4,6,10,15,17],nut_filterfals:[4,6],nut_funct:[4,6,13,15],nut_processor:[4,6],nut_sink:[4,6],nut_sourc:[4,6,15],nutflow:2,nutfunct:[4,5],nuts_bas:0,nutsflow:[0,1,2,3,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22],nutsink:[4,5],nutsourc:[4,5],object:[4,12,13,16,19,21],occasion:[7,11,21],occur:4,odd:[8,11],often:[8,9,17,19,20,21,22],onc:16,one:[4,7,14,15,18,19,20,21,22],onli:[4,6,8,9,13,14,16,19,20,21,22],onto:4,open:[19,20],oper:[1,3,4,6,7,9,11,12,13,16,17,19,20,21],operand:[7,12],option:4,order:[4,13,14,17,20,21],org:[4,19],organ:[19,21],other:[4,7,9,13,16,18,19,20,21,22],otherwis:[0,4,9],out:[4,7,8],output:[0,4,6,7,8,9,19,21],over:[0,1,4,6,9,11,17,20,21],overal:1,overcom:9,overrid:4,overridden:4,overview:1,p01:15,p02:15,p03:15,p04:15,p14:15,p15:15,p16:15,p_n:4,packag:[1,2],page:1,palindrom:[15,17],parallel:[4,14],param:4,paramet:[4,7,8,17],parmap:4,partial:[4,6],partit:[4,6,9,12],partition1:4,partition2:4,pass:[0,4,7,19],path:4,paus:6,pep:[0,13],per:[4,9],perform:[0,4,12,17,21],permit:22,permut:[4,6,12,16],pick:[4,6,8,13],pickabl:[4,14],pickl:[4,14],piec:13,pip:2,pipelin:[3,4,13,16],place:[10,16],placehold:22,plain:[6,13],platform:0,pleas:0,pluggi:0,plugin:0,portion:8,posit:4,possibl:[4,17,19],potenti:[4,17],pow:4,power:11,practic:12,practice_problem:0,pre:[3,4,6,14],pred:4,predecessor:9,predic:[4,6,7,11],predict:4,prefer:[0,7,19],prefetch:[4,6,12],prefetchiter:4,preprocess:14,prerequisit:[0,12],present:11,preserv:[4,14,17],presort:6,previou:15,print:[2,4,6,12,14,16,19,20,21],printabl:17,printprogress:[4,6,8],prob:4,probabl:[0,4,6],problem:[12,18],process:[3,4,6,7,8,13,14,16,17,19,21],processor:[0,6,7,12],procuct:4,produc:[4,16],product:[4,6,15,19],program:[1,15],progress:[4,6,8],project:[0,15],properti:16,provid:[0,3,4,7,8,9,11,12,14,16,17,19,21,22],pseudo:14,pull:13,pure:8,purpos:[8,9,11,16,21],push_doc:0,put:4,pypi:2,pytest:[0,2],python:[0,2,3,4,6,7,12,13,15,16,17,18,20,21,22],queue:4,quick:1,quickli:8,rais:[4,16],rand:4,random:[4,16],randomli:4,rang:[0,1,2,3,4,6,7,8,9,11,13,14,15,16,17,19,21,22],rare:7,read:[0,3,4,6,7,11,12,13,15,21],readabl:[7,16,22],readcsv:[0,4,6,18],reader:[4,20],readm:0,realiz:4,rearrang:[0,12],reason:17,receiv:7,recent:7,recip:[0,12],recommend:[7,13],recomput:4,record:21,recreat:[14,16],redirect:4,reduc:[4,6],reduct:[4,19],referenc:9,reject:11,rel:[4,19],relev:7,remain:[7,21],remaind:11,rememb:13,remov:[4,6,8,11,17,21],repeat:[4,6,15],repeatedli:[4,14,17],replac:8,requir:[4,7,8,9,10,11,17],reread:21,reset:4,restructur:17,result:[3,4,6,7,8,9,11,13,14,18,19,21,22],retriev:4,retvalu:[4,19],revers:[6,9,18,21],right:20,rnd:4,roman2arab:18,roman:18,rootdir:0,row:[4,20,21],rst:0,rule:[7,20],run:[0,2,4,5,8,11],safe:[4,19],same:[0,3,4,7,14,15,20,21],sampl:[4,6],scala:[15,16,22],script:2,search:1,sec:4,sec_to_hm:4,second:[0,3,4,8,11,17,21],secondli:16,section:[11,16,17],see:[0,1,4,7,9,13,17,19,21],select:[19,21],self:[7,16],sens:4,sep:[4,7],separ:[4,6,14,19,20],seper:4,sequenc:[4,9,13,15],sequenti:4,serv:[4,7,16,19],session:0,set:[4,6,11,13,17,19,20],setup:2,shortcut:7,shorter:[4,7,9,11,13,16,22],shortest:[4,9],should:[0,4,7,10,11,13],show:3,shuffl:[4,6],side:[0,4,7,8,11,19,20],signifi:7,similar:[4,11,17,19,21],similarili:[7,11],simpl:[7,9,11,16,19,22],simpler:[7,9],simpli:[7,9,11,13,19],sinc:[4,10,14,16,19,21,22],singl:[4,7,8,9,19,21],sink:[0,6,7,12],site:2,six:7,size:[4,6,8,17],skim:1,skip:[4,8,10,11,16,18,19,20],skiphead:[4,18,19,20],sleep:[4,6,8],slice:[4,6,12,21],slow:8,small:[1,15,17,20],smaller:[4,11],smallerthan3:4,smallest:[4,6,19],softwar:2,solut:[7,15,18],some:[4,15,19,20],sometim:[8,13,17],sophist:17,sort:[4,11,16],sourc:[0,2,5,6,7,12],special:[16,20,22],specif:[6,7,9,20],specifi:[4,17,19,20,21],speed:14,sphinx:0,split:[4,6,9],sqr_sum:15,squar:[0,2,4,6,8,13,15,19],stage:8,standard:[4,6,13],start:[0,1,4,7,13,14,15,17,19,20,21],startonetwo:19,startswith:20,state:16,statement:19,std:4,stdout:4,step:[3,4,9,20,21],stmt:0,stop:[4,9,17],stopiter:16,storag:4,store:[4,8,13,17,19],str:[4,7,15,19,21],stream:[9,19],stride:[4,17,21],string:[4,6,7,8,13,16,17,18,19,21],strongli:7,structur:[4,13,21],style:13,subsequ:[4,6,16,17,20],subset:17,success:[4,6,17],succinctli:16,sucess:21,suitabl:[7,15,19],sum:[4,6,8,13,15,17,19],sum_sqr:15,summari:12,support:[8,14,16,19,20,22],sure:18,synchron:9,syntax:[11,12,16],syntaxerror:4,system:[4,19],tab:[4,19,20],tabl:21,tabular:12,tail:[4,6,8,15],tailor:8,take:[1,3,4,6,7,8,9,11,13,14,16,17,20,21,22],takewhil:[4,6,12,15],task:[11,17],tee:[4,6,12],temp_out:4,temporari:14,temporarili:[6,8],ten:15,term:15,test:[4,18,20],test_bas:0,test_common:0,test_exampl:0,test_factori:0,test_funct:0,test_iterfunct:0,test_processor:0,test_sink:0,test_sourc:0,test_underscor:0,text:20,than:[3,4,7,9,11,13,14,16,21,22],thei:[9,16,19],them:[4,8,15,17],themselv:4,therefor:[4,7,19],thi:[4,7,8,9,11,12,13,16,17,21,22],thin:[3,19],third:17,thirdli:16,those:13,thread:[4,6,14],three:[3,16],threshold:[4,7],through:[4,6,17],ths:[8,13],time:[4,6,7,8,13,14,15,17,20,21],times2:21,timesn:4,timestr:4,togeth:[4,13,21],toi:[7,14,16],top:4,total:0,traceback:7,train:14,transform:[0,4,11,12,13],treat:17,trippl:13,tsv:[4,6,19,20],tupl:[0,4,6,9,11,19,21],tutori:[0,1],two:[3,4,6,7,9,11,14,15,18,19,20,21],type:[0,4,12,13],typeerror:[7,10],typic:[4,7,8,10,13,16,19],unalt:4,unchang:[4,6,21],underscor:[0,11,12,16],uniqu:[4,17],unit:4,unpack:4,unsupport:[7,12],until:[9,11,16],unus:22,unzip:[4,6,12],updat:[0,8],upper:[4,20],uppercas:[7,13],usag:[7,12,16],use:[4,6,7,14,16,18,19,21,22],used:[4,7,8,11,13,16,19,20,22],useful:[4,9,14],uses:16,using:[1,3,4,7,8,9,10,11,15,19],usual:[4,13],val:7,valid:19,valu:[4,6,7,8,11,14,15,18,19,20],valueerror:4,variabl:[6,10,16,22],variou:[11,21],veri:[4,11,16,17,21,22],verif:0,verifi:2,version:2,versu:4,via:[2,4,7,13,16,18,20],viewresult:4,virtualenv:2,vision:14,vnut:2,wai:[7,9,13,15,21],wait:[4,8],want:[2,4,11],welcom:0,well:[4,8,9,13,16,19],what:[4,17],when:[4,7,8,9,10,13,14,16,20],whenev:6,where:[2,4,9,11,13,14,17],whether:7,which:[7,11,13,14,16,17,19,22],whole:4,whose:15,why:17,win32:0,window:[2,4],wise:21,within:[4,6,11,17,21,22],without:[0,4,7,8,10,13,14,16,19],word:4,work:[2,9,13],worth:4,would:[9,19],wrap:[4,7,13],wrapper:[3,4,6,7,12,19],write:[4,6,7,11,12,16],writecsv:[4,6,18],writelin:19,writer:[4,18,19],written:[4,11,16,19],xrang:[3,4,7,14,16,20],yield:[4,7,15],you:[0,2,4,16],your:2,zero:22,zip:[4,6,12,20],zipper:9,zipwith:[4,6]},titles:["Contributions","Welcome to nuts-flow","Installation","Introduction","nutsflow package","nutsflow.examples package","Overview","Custom nuts","Printing and Debugging","Divide and conquer","Common error messages","Filtering","Tutorial","Nuts basics","Performance","Practice problems","Prerequisites","Rearranging data","Recipes","Writing to Sinks","Reading from Sources","Data transformation","Underscore syntax"],titleterms:{"break":13,"function":[4,13,16,19],"new":13,base:4,basic:13,bleed:2,cach:14,callabl:10,chunk:17,collect:19,column:18,combin:17,common:[4,10,19],concat:9,condit:8,conquer:9,consum:19,content:[4,5],contribut:0,count:19,counter:8,countvalu:19,csv:18,custom:7,cycl:17,data:[8,17,21],debug:8,dedup:17,defin:10,deplet:13,divid:9,document:0,dropwhil:11,edg:2,elementwis:21,enumer:20,environ:[0,2],error:10,euler:15,exampl:5,factori:4,file:18,filter:11,flatmap:21,flatten:21,flow:[1,13],from:20,get:21,getcol:21,groupbi:11,guid:0,head:19,indic:1,instal:2,interleav:9,introduct:3,iter:[13,16,20],iterfunct:4,lambda:16,limit:8,line:13,load:18,map:[18,21],mapcol:21,mapmulti:21,mappar:14,messag:10,modul:[4,5],name:[10,18],nut:[1,7,13,19,20],nut_filt:7,nut_filterfals:7,nut_funct:7,nut_processor:7,nut_sink:7,nut_sourc:7,nutsflow:[4,5],object:10,oper:8,operand:10,overview:6,packag:[4,5],partit:11,perform:14,permut:17,practic:15,prefetch:14,prerequisit:16,print:8,problem:15,processor:[4,13],product:20,python:19,rang:20,read:20,readcsv:20,rearrang:17,recip:18,reduc:19,repeat:20,sink:[4,13,19],slice:17,sourc:[4,13,20],standard:2,style:0,submodul:[4,5],subpackag:4,summari:13,syntax:22,tabular:21,tail:19,takewhil:11,tee:9,test:0,transform:21,tutori:12,type:[7,10],underscor:[4,22],unit:0,unsupport:10,unzip:9,upgrad:2,verif:2,virtual:2,welcom:1,wrapper:10,write:[18,19],writecsv:19,zip:9}})