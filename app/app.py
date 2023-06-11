import ir_datasets

from configoration import configoration
from data_source.docs import read_dataset_ar
from evaluation import app_evaluation as app_ev

from service import timer
import flask_app as fp
from data_source import model




def evaluation() :
    app_ev.evaluation()






def  run():

    print("################# Data Set Ar ################\n")
    timer.st()
    model.offline(model.corpus_ar, configoration.language_code_ar)
    timer.ed()
    print("################# Data Set En ################\n")
    timer.st()
    model.offline(model.corpus,configoration.language_code_en)
    timer.ed()
    fp.run()
   #  timer.st()
   #  model.online(query={"query":"ماذا اتعلم في العربية؟"},language_code=configoration.language_code_ar)
   #  timer.ed()
    # timer.st()
    # evaluation()
    # timer.ed()

run()








