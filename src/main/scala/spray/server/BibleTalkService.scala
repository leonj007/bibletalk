package spray.server

import scala.concurrent.duration._
import akka.util.Timeout
import akka.actor._
import spray.routing.HttpService

class BibleTalkService extends Actor with ActorLogging with HttpService {
  implicit val timeout: Timeout = 1.second // for the actor 'asks'


  val home = {
    path("") {
      getFromResource("web/index.html")
    } ~
      getFromResourceDirectory("web") ~
      pathPrefix("lib") {
        getFromResourceDirectory("web/lib")
      }
  }

  val staticRoute = home

  def actorRefFactory = context

  def receive = runRoute(staticRoute)
}
